import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Award, Users, Sparkles, Shield, Clock, MapPin, Star } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { icon: Users, value: '2 500+', label: 'Довольных клиентов' },
    { icon: Award, value: '15+', label: 'Лет опыта' },
    { icon: Sparkles, value: '8 000+', label: 'Работ выполнено' },
    { icon: Star, value: '4.9', label: 'Средний рейтинг' },
  ];

  const trustBadges = [
    { icon: Shield, text: '100% стерильность' },
    { icon: Award, text: 'Сертифицированные мастера' },
    { icon: Clock, text: 'Гарантия на работы' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/40">
      {/* Декоративный фон */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-[0.06]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="flex flex-wrap justify-center gap-2">
            <Badge className="bg-accent/20 text-accent border-accent/30 text-sm px-4 py-2">
              <Sparkles size={14} className="mr-1" />
              Премиум тату-студия в Москве
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-2">
              <MapPin size={14} className="mr-1" />
              м. Арбатская
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Искусство на вашей коже
            <span className="block text-accent mt-2">от мастеров своего дела</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Создаем уникальные татуировки любой сложности. Профессиональное оборудование,
            стерильность и индивидуальный подход к каждому клиенту.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-base font-medium px-8 py-6"
              onClick={() => scrollToSection('booking')}
            >
              Записаться на сеанс
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base font-medium px-8 py-6"
              onClick={() => scrollToSection('gallery')}
            >
              Посмотреть работы
            </Button>
          </div>

          {/* Трастовые бейджи */}
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            {trustBadges.map((badge, i) => {
              const Icon = badge.icon;
              return (
                <div key={i} className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon size={16} className="text-accent" />
                  <span className="font-medium">{badge.text}</span>
                </div>
              );
            })}
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="flex flex-col items-center py-6">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                      <Icon className="text-accent" size={22} />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                    <div className="text-xs text-muted-foreground font-medium mt-1">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-muted-foreground hover:text-accent transition-colors"
          aria-label="Scroll down"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;