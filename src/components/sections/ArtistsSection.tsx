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
import { artists } from '@/data/siteData';
import { Award, Calendar, Instagram, Star, ArrowRight } from 'lucide-react';

const ArtistsSection = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="artists" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
            Наша команда
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Мастера студии
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Познакомьтесь с нашими талантливыми художниками, каждый из которых —
            профессионал своего дела
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {artists.map((artist) => (
            <Card
              key={artist.id}
              className="overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <Badge className="absolute top-3 right-3 bg-green-500/90 text-white border-0">
                  <span className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse" />
                  Свободен
                </Badge>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-1">{artist.name}</h3>
                  <p className="text-sm text-accent mb-2">{artist.role}</p>
                  <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Award size={14} className="text-accent" />
                      <span>{artist.experience}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="text-yellow-500 fill-yellow-500" />
                      <span>5.0</span>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="pt-6 flex-1 flex flex-col">
                <p className="text-sm font-medium mb-1">Специализация:</p>
                <p className="text-sm text-muted-foreground mb-4">{artist.specialization}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {artist.specialization.split(',').map((s, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {s.trim()}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto space-y-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        Подробнее
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>{artist.name}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <img
                          src={artist.image}
                          alt={artist.name}
                          className="w-full h-72 object-cover rounded-lg"
                        />
                        <div>
                          <p className="text-lg font-bold text-accent mb-2">
                            {artist.role}
                          </p>
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="bg-muted/40 p-3 rounded-lg">
                              <p className="text-xs text-muted-foreground">Опыт работы</p>
                              <p className="font-bold">{artist.experience}</p>
                            </div>
                            <div className="bg-muted/40 p-3 rounded-lg">
                              <p className="text-xs text-muted-foreground">Рейтинг</p>
                              <p className="font-bold flex items-center space-x-1">
                                <Star size={14} className="text-yellow-500 fill-yellow-500" />
                                <span>5.0 / 5.0</span>
                              </p>
                            </div>
                          </div>
                          <p className="text-sm font-medium mb-2">Специализация:</p>
                          <p className="text-sm text-muted-foreground mb-4">
                            {artist.specialization}
                          </p>
                          <p className="text-sm">{artist.description}</p>
                          <div className="flex items-center space-x-4 mt-4 pt-4 border-t">
                            <button className="flex items-center space-x-1 text-sm text-accent hover:underline">
                              <Instagram size={16} />
                              <span>Instagram</span>
                            </button>
                            <button
                              onClick={() => scrollToSection('booking')}
                              className="flex items-center space-x-1 text-sm text-accent hover:underline"
                            >
                              <Calendar size={16} />
                              <span>Записаться</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button
                    className="w-full bg-accent hover:bg-accent/90"
                    onClick={() => scrollToSection('booking')}
                  >
                    Записаться
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistsSection;