import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Paintbrush,
  Eraser,
  RefreshCw,
  Users,
  Palette,
  FileText,
  ArrowRight,
  Clock,
  CheckCircle2,
  Sparkles,
  Shield,
  Star,
  Heart,
  Zap,
  Camera,
  Gift,
} from 'lucide-react';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      id: 1,
      icon: Paintbrush,
      title: 'Создание татуировки',
      shortDescription:
        'Индивидуальный дизайн и нанесение татуировки любой сложности в различных стилях',
      description:
        'Полный цикл работы: от обсуждения идеи до готовой татуировки. Наши мастера работают во всех популярных стилях — реализм, акварель, геометрия, минимализм, традишнл и блэкворк. Каждый эскиз разрабатывается под вас, с учётом анатомии и пожеланий.',
      features: [
        'Бесплатная консультация',
        'Разработка уникального эскиза',
        'Профессиональное нанесение',
        'Подробные рекомендации по уходу',
        'Гарантия на корректировку',
      ],
      price: 'от 5 000 ₽',
      duration: '1-8 часов',
      popular: true,
      badge: 'Хит',
      styles: ['Реализм', 'Акварель', 'Геометрия', 'Минимализм'],
    },
    {
      id: 2,
      icon: RefreshCw,
      title: 'Перекрытие старых тату',
      shortDescription:
        'Трансформация неудачных или устаревших татуировок в новые произведения искусства',
      description:
        'Специализируемся на кавер-апе — перекрытии старых татуировок. Оцениваем возможность перекрытия, разрабатываем концепцию, которая скроет недостатки и создаст новую гармоничную композицию. Возможна комбинация с лазерным осветлением.',
      features: [
        'Оценка старой работы',
        'Разработка концепции перекрытия',
        'Профессиональное нанесение',
        'Гарантия качества',
        'Возможность осветления лазером',
      ],
      price: 'от 8 000 ₽',
      duration: '2-6 часов',
      popular: false,
      badge: 'Сложная работа',
      styles: ['Блэкворк', 'Реализм', 'Геометрия'],
    },
    {
      id: 3,
      icon: Eraser,
      title: 'Лазерное удаление',
      shortDescription:
        'Безопасное и эффективное удаление нежелательных татуировок современным лазером',
      description:
        'Используем современное лазерное оборудование для постепенного и безопасного удаления татуировок. Процедура проходит поэтапно — за несколько сеансов, с минимальным дискомфортом и без рубцов. Подходит для полного удаления или осветления под кавер-ап.',
      features: [
        'Консультация специалиста',
        'Безболезненная процедура',
        'Поэтапное удаление',
        'Минимальный период восстановления',
        'Отсутствие рубцов',
      ],
      price: 'от 3 000 ₽',
      duration: '15-45 минут',
      popular: false,
      badge: 'Безопасно',
      styles: ['Любой стиль'],
    },
    {
      id: 4,
      icon: Palette,
      title: 'Коррекция и доработка',
      shortDescription:
        'Исправление и улучшение существующих татуировок, добавление деталей и цвета',
      description:
        'Если татуировка потеряла яркость, требует доработки деталей или вы просто хотите её освежить — мы поможем. Проводим анализ работы, составляем план коррекции и возвращаем татуировке первоначальную яркость и чёткость.',
      features: [
        'Анализ текущей работы',
        'План коррекции',
        'Качественная доработка',
        'Восстановление яркости',
        'Добавление цвета и деталей',
      ],
      price: 'от 4 000 ₽',
      duration: '1-3 часа',
      popular: false,
      badge: 'Освежение',
      styles: ['Любой стиль'],
    },
    {
      id: 5,
      icon: FileText,
      title: 'Разработка эскиза',
      shortDescription:
        'Создание уникального дизайна татуировки по вашим идеям и пожеланиям',
      description:
        'Если вы ещё не решились на татуировку, но хотите увидеть, как может выглядеть ваша идея — закажите разработку эскиза. Мастер предложит несколько вариантов, внесёт правки и подготовит финальный дизайн, готовый к нанесению.',
      features: [
        'Обсуждение концепции',
        'Несколько вариантов дизайна',
        'Правки и доработки',
        'Финальный эскиз в высоком разрешении',
        'Скидка на нанесение',
      ],
      price: 'от 2 000 ₽',
      duration: '1-3 дня',
      popular: false,
      badge: 'Без обязательств',
      styles: ['Любой стиль'],
    },
    {
      id: 6,
      icon: Users,
      title: 'Парные и семейные тату',
      shortDescription:
        'Создание символичных татуировок для пар, семей и друзей',
      description:
        'Создаём парные и семейные татуировки, которые объединяют людей. Единая концепция, символичный дизайн, синхронное нанесение. Скидка на вторую и последующие работы, совместная консультация и комфортные условия.',
      features: [
        'Совместная консультация',
        'Единая концепция дизайна',
        'Скидка на вторую работу',
        'Символичный дизайн',
        'Возможность синхронного нанесения',
      ],
      price: 'от 10 000 ₽',
      duration: '2-8 часов',
      popular: false,
      badge: 'Для двоих',
      styles: ['Минимализм', 'Геометрия', 'Лайнворк'],
    },
  ];

  const advantages = [
    {
      icon: Shield,
      title: 'Стерильность',
      text: 'Одноразовые материалы и полная дезинфекция',
    },
    {
      icon: Award,
      title: 'Мастера с опытом',
      text: 'Средний стаж команды — более 10 лет',
    },
    {
      icon: Zap,
      title: 'Быстрая запись',
      text: 'Свободные слоты в течение недели',
    },
    {
      icon: Heart,
      title: 'Комфорт',
      text: 'Уютная студия и забота о каждом клиенте',
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <div className="text-center mb-14">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
            Услуги
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Что мы предлагаем
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Полный спектр услуг — от разработки эскиза до удаления татуировок.
            Работаем с любыми стилями и уровнями сложности
          </p>
        </div>

        {/* Сетка услуг */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service) => {
            const Icon = service.icon;
            const isActive = activeService === service.id;

            return (
              <Card
                key={service.id}
                className={`relative overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                  isActive ? 'ring-2 ring-accent shadow-2xl' : ''
                }`}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                {/* Бейдж */}
                <Badge
                  className={`absolute top-4 right-4 z-10 text-xs border-0 ${
                    service.popular
                      ? 'bg-accent text-white'
                      : 'bg-secondary text-secondary-foreground'
                  }`}
                >
                  {service.popular && <Sparkles size={12} className="mr-1" />}
                  {service.badge}
                </Badge>

                <CardContent className="pt-6 flex-1 flex flex-col">
                  {/* Иконка */}
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="text-accent" size={26} />
                  </div>

                  {/* Заголовок */}
                  <h3 className="text-xl font-bold mb-2 pr-16">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Мета */}
                  <div className="flex flex-wrap items-center gap-3 mb-4 text-xs">
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Clock size={14} className="text-accent" />
                      <span className="font-medium">{service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Star size={14} className="text-yellow-500 fill-yellow-500" />
                      <span className="font-medium">5.0</span>
                    </div>
                  </div>

                  {/* Список особенностей */}
                  <ul className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle2
                          size={16}
                          className="text-accent mt-0.5 flex-shrink-0"
                        />
                        <span className="text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Теги стилей */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {service.styles.slice(0, 3).map((s, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {s}
                      </Badge>
                    ))}
                  </div>

                  {/* Цена и кнопки */}
                  <div className="mt-auto">
                    <div className="flex items-baseline justify-between mb-3 pt-3 border-t border-border">
                      <span className="text-xs text-muted-foreground">Стоимость</span>
                      <span className="text-2xl font-bold text-accent">
                        {service.price}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="flex-1">
                            Подробнее
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-lg">
                          <DialogHeader>
                            <DialogTitle className="flex items-center space-x-3">
                              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                                <Icon className="text-accent" size={20} />
                              </div>
                              <span>{service.title}</span>
                            </DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {service.description}
                            </p>

                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-muted/40 p-3 rounded-lg">
                                <div className="flex items-center space-x-1 text-xs text-muted-foreground mb-1">
                                  <Clock size={12} />
                                  <span>Длительность</span>
                                </div>
                                <p className="text-sm font-bold">{service.duration}</p>
                              </div>
                              <div className="bg-muted/40 p-3 rounded-lg">
                                <div className="flex items-center space-x-1 text-xs text-muted-foreground mb-1">
                                  <Star size={12} />
                                  <span>Стоимость</span>
                                </div>
                                <p className="text-sm font-bold text-accent">
                                  {service.price}
                                </p>
                              </div>
                            </div>

                            <div>
                              <p className="text-sm font-bold mb-2">
                                Что входит в услугу:
                              </p>
                              <ul className="space-y-2">
                                {service.features.map((f, i) => (
                                  <li key={i} className="flex items-start space-x-2">
                                    <CheckCircle2
                                      size={16}
                                      className="text-accent mt-0.5 flex-shrink-0"
                                    />
                                    <span className="text-sm">{f}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <p className="text-sm font-bold mb-2">Подходит для стилей:</p>
                              <div className="flex flex-wrap gap-1">
                                {service.styles.map((s, i) => (
                                  <Badge key={i} variant="outline" className="text-xs">
                                    {s}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <Button
                              className="w-full bg-accent hover:bg-accent/90"
                              onClick={() => {
                                scrollToSection('booking');
                              }}
                            >
                              Записаться на услугу
                              <ArrowRight size={16} className="ml-2" />
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>

                      <Button
                        className="flex-1 bg-accent hover:bg-accent/90"
                        onClick={() => scrollToSection('booking')}
                      >
                        Записаться
                        <ArrowRight size={14} className="ml-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Преимущества услуг */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {advantages.map((adv, i) => {
            const Icon = adv.icon;
            return (
              <Card key={i} className="bg-accent/5 border-accent/20">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-3">
                    <Icon className="text-accent" size={22} />
                  </div>
                  <h4 className="font-bold mb-1 text-sm">{adv.title}</h4>
                  <p className="text-xs text-muted-foreground">{adv.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Дополнительные услуги */}
        <Card className="mb-12 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border-accent/20">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-1">Дополнительные услуги</h3>
                <p className="text-sm text-muted-foreground">
                  Приятные бонусы и сопутствующие услуги для наших клиентов
                </p>
              </div>
              <Badge className="bg-accent/20 text-accent border-accent/30 w-fit">
                <Gift size={12} className="mr-1" />
                Бонусы для клиентов
              </Badge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  icon: Camera,
                  title: 'Фотосессия работы',
                  text: 'Профессиональные фото готовой татуировки в подарок',
                  price: 'Бесплатно',
                },
                {
                  icon: Gift,
                  title: 'Подарочный сертификат',
                  text: 'Идеальный подарок для близких — на любую сумму',
                  price: 'от 3 000 ₽',
                },
                {
                  icon: Shield,
                  title: 'Уход после сеанса',
                  text: 'Набор для заживления (плёнка, крем, инструкция)',
                  price: '500 ₽',
                },
                {
                  icon: Sparkles,
                  title: 'Осветление перед кавер-апом',
                  text: 'Лазерное осветление для лучшего перекрытия',
                  price: 'от 2 000 ₽',
                },
                {
                  icon: FileText,
                  title: 'Печать эскиза',
                  text: 'Печать вашего эскиза в высоком разрешении на память',
                  price: '300 ₽',
                },
                {
                  icon: Heart,
                  title: 'Скидка на вторую работу',
                  text: '10% на любую следующую татуировку в течение 3 месяцев',
                  price: '-10%',
                },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start space-x-3 p-4 bg-card rounded-lg border hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-accent" size={18} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-bold text-sm">{s.title}</h4>
                        <span className="text-xs font-bold text-accent whitespace-nowrap">
                          {s.price}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{s.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* CTA-полоса */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Не уверены, какая услуга вам подходит? Запишитесь на бесплатную консультацию —
            мастер поможет определиться
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 font-medium"
              onClick={() => scrollToSection('booking')}
            >
              Записаться на консультацию
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-medium"
              onClick={() => scrollToSection('pricing')}
            >
              Посмотреть прайс
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;