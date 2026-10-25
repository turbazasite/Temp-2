import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { pricing } from '@/data/siteData';
import { Check, Star, Gift, Percent, Shield } from 'lucide-react';

const PricingSection = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const perks = [
    { icon: Gift, title: 'Подарочные сертификаты', text: 'Идеальный подарок для близких' },
    { icon: Percent, title: 'Скидка 10%', text: 'На вторую татуировку в течение 3 месяцев' },
    { icon: Shield, title: 'Без скрытых доплат', text: 'Цена фиксируется до сеанса' },
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Прайс</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Стоимость услуг
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Прозрачные цены без скрытых платежей. Окончательная стоимость определяется
            после консультации
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricing.map((plan) => (
            <Card
              key={plan.id}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col ${
                plan.popular ? 'border-2 border-accent shadow-lg' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-accent text-white px-3 py-1 text-xs font-bold rounded-bl-lg flex items-center space-x-1">
                  <Star size={12} fill="currentColor" />
                  <span>Популярно</span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 flex-1">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Check size={20} className="text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular ? 'bg-accent hover:bg-accent/90' : ''
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                  onClick={() => scrollToSection('booking')}
                >
                  Записаться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
          {perks.map((perk, i) => {
            const Icon = perk.icon;
            return (
              <Card key={i} className="bg-accent/5 border-accent/20">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                    <Icon className="text-accent" size={22} />
                  </div>
                  <h4 className="font-bold mb-1">{perk.title}</h4>
                  <p className="text-sm text-muted-foreground">{perk.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            * Точная стоимость определяется индивидуально после консультации с мастером.
            Предоплата 3000₽ входит в стоимость работы.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;