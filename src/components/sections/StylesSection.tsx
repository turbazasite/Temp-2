import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { styles } from '@/data/siteData';
import { Clock, Palette, ArrowRight, Sparkles } from 'lucide-react';

const StylesSection = () => {
  const [activeStyle, setActiveStyle] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const styleMeta: Record<string, { duration: string; difficulty: string }> = {
    Реализм: { duration: '4-8 часов', difficulty: 'Высокая' },
    Акварель: { duration: '2-5 часов', difficulty: 'Средняя' },
    Геометрия: { duration: '1-4 часа', difficulty: 'Средняя' },
    Минимализм: { duration: '30 мин - 2 часа', difficulty: 'Низкая' },
    Традишнл: { duration: '1-3 часа', difficulty: 'Средняя' },
    Блэкворк: { duration: '2-6 часов', difficulty: 'Высокая' },
  };

  return (
    <section id="styles" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Стили</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Стили татуировок
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Работаем в различных стилях — от классического реализма до современного
            минимализма
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {styles.map((style) => {
            const meta = styleMeta[style.name] || {
              duration: '1-4 часа',
              difficulty: 'Средняя',
            };
            const isActive = activeStyle === style.id;

            return (
              <Card
                key={style.id}
                className={`overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 group ${
                  isActive ? 'ring-2 ring-accent shadow-2xl' : ''
                }`}
                onMouseEnter={() => setActiveStyle(style.id)}
                onMouseLeave={() => setActiveStyle(null)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={style.image}
                    alt={style.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                  {style.id === 1 && (
                    <Badge className="absolute top-3 left-3 bg-accent text-white border-0">
                      <Sparkles size={12} className="mr-1" />
                      Хит
                    </Badge>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold mb-2">{style.name}</h3>
                    <Badge className="bg-accent/20 text-accent border-accent/30">
                      {style.price}
                    </Badge>
                  </div>
                </div>
                <CardContent className="pt-6 space-y-4">
                  <p className="text-sm text-muted-foreground">{style.description}</p>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-muted/40 p-2 rounded-lg">
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground mb-1">
                        <Clock size={12} />
                        <span>Сеанс</span>
                      </div>
                      <p className="text-sm font-bold">{meta.duration}</p>
                    </div>
                    <div className="bg-muted/40 p-2 rounded-lg">
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground mb-1">
                        <Palette size={12} />
                        <span>Сложность</span>
                      </div>
                      <p className="text-sm font-bold">{meta.difficulty}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => scrollToSection('gallery')}
                    >
                      Примеры работ
                    </Button>
                    <Button
                      className="flex-1 bg-accent hover:bg-accent/90"
                      onClick={() => scrollToSection('booking')}
                    >
                      Записаться
                      <ArrowRight size={14} className="ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StylesSection;