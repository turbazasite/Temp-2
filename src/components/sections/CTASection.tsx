import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Phone, Calendar, Shield, Award, Users, Clock } from 'lucide-react';

const CTASection = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const guarantees = [
    { icon: Shield, text: 'Гарантия качества' },
    { icon: Award, text: 'Опытные мастера' },
    { icon: Users, text: '2500+ клиентов' },
    { icon: Clock, text: 'Работаем 7 дней' },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <Card className="relative overflow-hidden border-accent/20">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent" />
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1194775/pexels-photo-1194775.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5" />

          <CardContent className="relative z-10 px-6 py-16 md:py-24 text-center">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
              Ограниченное предложение
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Готовы воплотить вашу идею в жизнь?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 font-medium">
              Запишитесь на бесплатную консультацию, и наши мастера помогут создать
              уникальную татуировку, которая будет с вами всю жизнь
            </p>
            <p className="text-sm text-accent font-bold mb-8">
              🎁 При записи через сайт — скидка 10% на первый сеанс
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-base font-medium px-8 py-6"
                onClick={() => scrollToSection('booking')}
              >
                <Calendar className="mr-2" size={20} />
                Записаться на сеанс
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base font-medium px-8 py-6"
                onClick={() => (window.location.href = 'tel:+74951234567')}
              >
                <Phone className="mr-2" size={20} />
                Позвонить нам
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {guarantees.map((g, i) => {
                const Icon = g.icon;
                return (
                  <div key={i} className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon className="text-accent" size={22} />
                    </div>
                    <span className="text-sm font-medium">{g.text}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;