import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Heart, Star, TrendingUp, Award, Users, CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Безопасность',
      description:
        'Используем только стерильные одноразовые материалы и следуем всем санитарным нормам',
    },
    {
      icon: Heart,
      title: 'Индивидуальный подход',
      description:
        'Разрабатываем уникальный дизайн под каждого клиента с учетом всех пожеланий',
    },
    {
      icon: Star,
      title: 'Опытные мастера',
      description:
        'Наша команда — профессионалы с многолетним опытом и международными сертификатами',
    },
    {
      icon: TrendingUp,
      title: 'Современное оборудование',
      description:
        'Работаем на лучшем оборудовании от ведущих мировых производителей',
    },
  ];

  const timeline = [
    { year: '2010', text: 'Основание студии, первые клиенты' },
    { year: '2014', text: 'Открытие второго филиала, расширение команды' },
    { year: '2018', text: 'Победа на международной конвенции тату-мастеров' },
    { year: '2021', text: 'Переезд в новую просторную студию в центре' },
    { year: '2024', text: 'Более 2500 постоянных клиентов' },
  ];

  const achievements = [
    { value: '15+', label: 'Лет на рынке' },
    { value: '4.9', label: 'Рейтинг клиентов' },
    { value: '20+', label: 'Наград и премий' },
    { value: '100%', label: 'Стерильность' },
  ];

  const values = [
    'Честные цены без скрытых доплат',
    'Бесплатные консультации и правки',
    'Пожизненная гарантия на корректировку',
    'Индивидуальные условия для крупных работ',
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">О нас</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ink Legacy Studio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Мы создаем не просто татуировки — мы воплощаем ваши истории и мечты в
            искусстве, которое останется с вами на всю жизнь
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">Наша миссия</h3>
            <p className="text-base text-muted-foreground leading-relaxed font-medium">
              С 2010 года мы помогаем людям выражать свою индивидуальность через
              искусство татуировки. Наша студия стала домом для тысяч клиентов, которые
              доверили нам создание своих уникальных работ.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed font-medium">
              Мы гордимся тем, что создаем не просто красивые изображения, но и
              помогаем нашим клиентам рассказать свою историю, запечатлеть важные
              моменты жизни или просто украсить свое тело произведением искусства.
            </p>

            <div className="space-y-3 pt-2">
              {values.map((v, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <CheckCircle2 className="text-accent mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-sm font-medium">{v}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {achievements.map((a, i) => (
                <div key={i} className="text-center p-3 rounded-lg bg-muted/40">
                  <div className="text-2xl font-bold text-accent">{a.value}</div>
                  <div className="text-xs text-muted-foreground font-medium mt-1">
                    {a.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[540px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/1893424/pexels-photo-1893424.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Тату-студия Ink Legacy"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <div className="flex items-center space-x-3 text-white">
                <Award size={24} className="text-accent" />
                <div>
                  <p className="font-bold">Лучшая тату-студия Москвы 2024</p>
                  <p className="text-sm opacity-90">по версии независимого рейтинга</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Преимущества */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Таймлайн */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Наша история
          </h3>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 md:-translate-x-1/2" />
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`relative flex items-start mb-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm z-10 ml-0 md:mx-auto">
                  {i + 1}
                </div>
                <div
                  className={`ml-4 md:ml-0 md:w-1/2 ${
                    i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}
                >
                  <div className="inline-block bg-card border rounded-lg p-4 shadow-sm">
                    <div className="text-accent font-bold text-lg">{item.year}</div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {item.text}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;