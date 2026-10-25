import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Главная', id: 'hero' },
    { label: 'О нас', id: 'about' },
    { label: 'Мастера', id: 'artists' },
    { label: 'Стили', id: 'styles' },
    { label: 'Галерея', id: 'gallery' },
    { label: 'Прайс', id: 'pricing' },
    { label: 'Отзывы', id: 'reviews' },
    { label: 'Контакты', id: 'contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
              IL
            </div>
            <span className="text-xl font-bold">Ink Legacy</span>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button onClick={() => scrollToSection('booking')} className="bg-accent hover:bg-accent/90">
              Записаться
            </Button>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-sm font-medium hover:text-accent transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button onClick={() => scrollToSection('booking')} className="bg-accent hover:bg-accent/90 w-full">
                Записаться
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;