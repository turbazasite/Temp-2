import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { processSteps } from '@/data/siteData';
import { Clock, CheckCircle2, Shield, Heart } from 'lucide-react';

const ProcessSection = () => {
  const guarantees = [
    { icon: Shield, text: 'Стерильные одноразовые материалы' },
    { icon: CheckCircle2, text: 'Правки эскиза без ограничений' },
    { icon: Heart, text: 'Комфорт и поддержка на всех этапах' },
  ];

  const preparation = [
    'Выспитесь перед сеансом',
    'Плотно поешьте за 2-3 часа',
    'Не употребляйте алкоголь за сутки',
    'Наденьте удобную одежду',
  ];

  return (
    <section id="process" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
            Процесс
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Как мы работаем
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            От первой консультации до готовой татуировки — профессиональный подход на
            каждом этапе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {processSteps.map((step, index) => (
            <div key={step.id} className="relative">
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-full w-full h-0.5 bg-accent/30 -translate-x-1/2 z-0" />
              )}
              <Card className="relative z-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.id}
                  </div>
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="flex items-center space-x-2 text-accent">
                    <Clock size={16} />
                    <span className="text-sm font-medium">{step.duration}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Наши гарантии</h3>
              <ul className="space-y-3">
                {guarantees.map((g, i) => {
                  const Icon = g.icon;
                  return (
                    <li key={i} className="flex items-start space-x-3">
                      <Icon className="text-accent mt-0.5 flex-shrink-0" size={20} />
                      <span className="text-sm font-medium">{g.text}</span>
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Как подготовиться</h3>
              <ul className="space-y-3">
                {preparation.map((p, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle2
                      className="text-accent mt-0.5 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-sm font-medium">{p}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;