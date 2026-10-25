import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Clock, CheckCircle2, Info, Shield } from 'lucide-react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useToast } from '@/hooks/use-toast';
import { timeSlots } from '@/data/siteData';

const BookingSection = () => {
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [service, setService] = useState<string>('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description:
        'Мы свяжемся с вами в ближайшее время для подтверждения записи.',
    });
    e.currentTarget.reset();
    setDate(undefined);
    setSelectedTime('');
    setService('');
  };

  const tips = [
    'Бесплатная консультация перед сеансом',
    'Предоплата 3000₽ входит в стоимость',
    'Возможен перенос за 24 часа',
  ];

  return (
    <section id="booking" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
            Бронирование
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Записаться на сеанс
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите удобную дату и время для консультации или создания татуировки
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Форма бронирования</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="booking-name">Ваше имя *</Label>
                        <Input
                          id="booking-name"
                          name="name"
                          required
                          placeholder="Иван Иванов"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="booking-phone">Телефон *</Label>
                        <Input
                          id="booking-phone"
                          name="phone"
                          required
                          type="tel"
                          placeholder="+7 (999) 123-45-67"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="booking-email">Email</Label>
                      <Input
                        id="booking-email"
                        name="email"
                        type="email"
                        placeholder="ivan@example.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="booking-service">Услуга *</Label>
                        <Select
                          name="service"
                          required
                          value={service}
                          onValueChange={setService}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите услугу" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="consultation">Консультация</SelectItem>
                            <SelectItem value="small">Малая татуировка</SelectItem>
                            <SelectItem value="medium">Средняя татуировка</SelectItem>
                            <SelectItem value="large">Крупная татуировка</SelectItem>
                            <SelectItem value="cover">Перекрытие</SelectItem>
                            <SelectItem value="correction">Коррекция</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="booking-artist">Мастер</Label>
                        <Select name="artist">
                          <SelectTrigger>
                            <SelectValue placeholder="Любой мастер" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="any">Любой мастер</SelectItem>
                            <SelectItem value="alex">Александр Черный</SelectItem>
                            <SelectItem value="maria">Мария Колор</SelectItem>
                            <SelectItem value="dmitry">Дмитрий Нео</SelectItem>
                            <SelectItem value="anna">Анна Лайн</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Дата *</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, 'PPP', { locale: ru }) : 'Выберите дату'}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              disabled={(d) => d < new Date()}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="space-y-2">
                        <Label>Время *</Label>
                        <Select value={selectedTime} onValueChange={setSelectedTime}>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите время">
                              {selectedTime && (
                                <span className="flex items-center">
                                  <Clock className="mr-2 h-4 w-4" />
                                  {selectedTime}
                                </span>
                              )}
                            </SelectValue>
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((t) => (
                              <SelectItem key={t} value={t}>
                                {t}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="booking-description">Описание татуировки</Label>
                      <Textarea
                        id="booking-description"
                        name="description"
                        placeholder="Опишите желаемую татуировку, размер, расположение и другие детали..."
                        rows={4}
                        className="resize-none"
                      />
                    </div>

                    {date && selectedTime && (
                      <Card className="bg-accent/10 border-accent/30">
                        <CardContent className="pt-4">
                          <div className="flex items-start space-x-3">
                            <CheckCircle2 className="text-accent mt-0.5" size={20} />
                            <div>
                              <p className="text-sm font-bold">Ваша запись:</p>
                              <p className="text-sm text-muted-foreground">
                                {format(date, 'PPP', { locale: ru })} в {selectedTime}
                              </p>
                              {service && (
                                <p className="text-sm text-muted-foreground mt-1">
                                  Услуга: {service}
                                </p>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    <Button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent/90"
                      disabled={!date || !selectedTime}
                    >
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <Info className="text-accent flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Полезная информация</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {tips.map((tip, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <CheckCircle2
                              size={14}
                              className="text-accent flex-shrink-0 mt-0.5"
                            />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Shield className="text-accent" size={20} />
                    <h3 className="font-bold">Гарантия</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Мы гарантируем безопасность процедуры и высокое качество работы.
                    Все материалы стерильны, инструменты одноразовые.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-3">Экстренная связь</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Нужна помощь срочно?
                  </p>
                  <a
                    href="tel:+74951234567"
                    className="text-accent font-bold hover:underline"
                  >
                    +7 (495) 123-45-67
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;