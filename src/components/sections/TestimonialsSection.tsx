import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { testimonials } from '@/data/siteData';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState('Все');

  const filters = ['Все', 'Реализм', 'Акварель', 'Геометрия', 'Минимализм'];

  const filtered =
    filter === 'Все'
      ? testimonials
      : testimonials.filter((t) => t.tattooStyle === filter);

  const current = filtered[currentIndex] || filtered[0];

  const next = () => setCurrentIndex((p) => (p + 1) % filtered.length);
  const prev = () =>
    setCurrentIndex((p) => (p - 1 + filtered.length) % filtered.length);

  const ratingBreakdown = [
    { stars: 5, percent: 92 },
    { stars: 4, percent: 6 },
    { stars: 3, percent: 2 },
    { stars: 2, percent: 0 },
    { stars: 1, percent: 0 },
  ];

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
            Отзывы
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Что говорят клиенты
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Реальные отзывы от наших довольных клиентов
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10">
          <Card className="lg:col-span-1">
            <CardContent className="pt-6">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold mb-2">4.9</div>
                <div className="flex justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  На основе {testimonials.length * 47} отзывов
                </p>
              </div>
              <div className="space-y-2">
                {ratingBreakdown.map((r) => (
                  <div key={r.stars} className="flex items-center space-x-3">
                    <span className="text-sm font-medium w-4">{r.stars}</span>
                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-500"
                        style={{ width: `${r.percent}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground w-8 text-right">
                      {r.percent}%
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardContent className="pt-6 relative">
              <Quote className="absolute top-4 right-4 text-accent opacity-20" size={60} />
              <div className="flex items-start space-x-4 mb-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={current.avatar} alt={current.name} />
                  <AvatarFallback>{current.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-lg">{current.name}</h4>
                    <CheckCircle2 size={16} className="text-green-500" />
                  </div>
                  <p className="text-sm text-muted-foreground">{current.date}</p>
                  <Badge className="mt-1 text-xs" variant="outline">
                    {current.tattooStyle}
                  </Badge>
                </div>
              </div>
              <div className="flex space-x-1 mb-3">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                {current.text}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-1">
                  {filtered.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === currentIndex ? 'bg-accent w-6' : 'bg-muted-foreground/30'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Button size="icon" variant="outline" onClick={prev}>
                    <ChevronLeft size={18} />
                  </Button>
                  <Button size="icon" variant="outline" onClick={next}>
                    <ChevronRight size={18} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((f) => (
            <Button
              key={f}
              size="sm"
              variant={filter === f ? 'default' : 'outline'}
              className={filter === f ? 'bg-accent hover:bg-accent/90' : ''}
              onClick={() => {
                setFilter(f);
                setCurrentIndex(0);
              }}
            >
              {f}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.slice(0, 3).map((t) => (
            <Card key={t.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={t.avatar} alt={t.name} />
                    <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-sm">{t.name}</h4>
                    <div className="flex space-x-0.5">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className="text-yellow-500 fill-yellow-500"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3">{t.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;