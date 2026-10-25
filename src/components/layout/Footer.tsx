import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                IL
              </div>
              <span className="text-xl font-bold">Ink Legacy</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Профессиональная тату-студия с опытными мастерами и индивидуальным подходом к каждому клиенту.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('about')} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  О нас
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('artists')} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Мастера
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('styles')} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Стили татуировок
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Галерея
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Прайс
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone size={18} className="text-accent mt-0.5" />
                <a href="tel:+79991234567" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  +7 (999) 123-45-67
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail size={18} className="text-accent mt-0.5" />
                <a href="mailto:info@inklegacy.ru" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  info@inklegacy.ru
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  г. Москва, ул. Примерная, д. 1
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Режим работы</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Пн-Пт: 11:00 - 21:00</li>
              <li>Сб-Вс: 12:00 - 20:00</li>
              <li className="pt-2 text-accent font-medium">Работаем без выходных</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2024 Ink Legacy. Все права защищены.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-accent transition-colors">Публичная оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;