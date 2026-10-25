import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
  Send,
  Navigation,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: 'Сообщение отправлено!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    e.currentTarget.reset();
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Адрес',
      content: 'г. Москва, ул. Арбат, д. 15',
      link: 'https://maps.google.com',
      note: '5 минут от м. Арбатская',
    },
    {
      icon: Phone,
      title: 'Телефон',
      content: '+7 (495) 123-45-67',
      link: 'tel:+74951234567',
      note: 'Ежедневно с 11:00 до 21:00',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@inklegacy.ru',
      link: 'mailto:info@inklegacy.ru',
      note: 'Отвечаем в течение часа',
    },
    {
      icon: Clock,
      title: 'Режим работы',
      content: 'Пн-Пт: 11:00 - 21:00',
      link: null,
      note: 'Сб-Вс: 12:00 - 20:00',
    },
  ];

  const socialLinks = [
    { icon: Instagram, name: 'Instagram', link: 'https://instagram.com', handle: '@ink_legacy' },
    { icon: Facebook, name: 'Facebook', link: 'https://facebook.com', handle: 'Ink Legacy' },
    { icon: MessageCircle, name: 'Telegram', link: 'https://t.me', handle: '@inklegacy' },
  ];

  const quickActions = [
    { icon: Phone, text: 'Позвонить', href: 'tel:+74951234567' },
    { icon: Send, text: 'Telegram', href: 'https://t.me' },
    { icon: Navigation, text: 'Маршрут', href: 'https://maps.google.com' },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
            Контакты
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Остались вопросы? Напишите нам, и мы с радостью на них ответим
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="text-accent" size={20} />
                        </div>
                        <div>
                          <h3 className="font-bold text-sm mb-1">{info.title}</h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-sm text-foreground hover:text-accent transition-colors font-medium block"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-sm text-foreground font-medium">
                              {info.content}
                            </p>
                          )}
                          <p className="text-xs text-muted-foreground mt-1">{info.note}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="grid grid-cols-3 gap-3">
              {quickActions.map((action, i) => {
                const Icon = action.icon;
                return (
                  <a
                    key={i}
                    href={action.href}
                    target={action.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 bg-accent/5 border border-accent/20 rounded-lg hover:bg-accent/10 transition-colors"
                  >
                    <Icon size={22} className="text-accent mb-2" />
                    <span className="text-sm font-medium">{action.text}</span>
                  </a>
                );
              })}
            </div>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-4">Мы в социальных сетях</h3>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                          <Icon size={18} className="text-accent" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{social.name}</p>
                          <p className="text-xs text-muted-foreground">{social.handle}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.5087487845985!2d37.58793331594658!3d55.75139998055564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0YPQuy4g0JDRgNCx0LDRgiwgMTUsINCc0L7RgdC60LLQsCwgMTE5MDE5!5e0!3m2!1sru!2sru!4v1234567890123!5m2!1sru!2sru"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Карта расположения студии"
                />
              </div>
            </Card>
          </div>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-2">Напишите нам</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Ответим в течение часа в рабочее время
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Ваше имя *</Label>
                  <Input
                    id="contact-name"
                    name="name"
                    required
                    placeholder="Иван Иванов"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email *</Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="ivan@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Телефон</Label>
                  <Input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message">Сообщение *</Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    required
                    placeholder="Ваше сообщение..."
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90"
                >
                  <Send size={16} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t">
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных
                  данных
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;