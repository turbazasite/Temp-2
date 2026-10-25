import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Instagram, Award, Calendar } from 'lucide-react';

const TeamSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const team = [
    {
      id: 1,
      name: 'Александр Волков',
      role: 'Основатель, мастер реализма',
      avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '15 лет',
      specialization: 'Реализм, портреты',
      instagram: '@alex_tattoo',
      awards: 'Победитель международных конвенций',
      description: 'Специализируется на реалистичных портретах и сложных композициях'
    },
    {
      id: 2,
      name: 'Мария Соколова',
      role: 'Мастер акварельной техники',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '10 лет',
      specialization: 'Акварель, цветы',
      instagram: '@maria_watercolor',
      awards: 'Лучший мастер акварели 2023',
      description: 'Создает нежные акварельные композиции с уникальным стилем'
    },
    {
      id: 3,
      name: 'Дмитрий Петров',
      role: 'Мастер геометрии и дотворка',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '8 лет',
      specialization: 'Геометрия, дотворк',
      instagram: '@dmitry_geometry',
      awards: 'Мастер точной геометрии',
      description: 'Эксперт в создании симметричных геометрических узоров'
    },
    {
      id: 4,
      name: 'Елена Кузнецова',
      role: 'Мастер минимализма',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '7 лет',
      specialization: 'Минимализм, лайнворк',
      instagram: '@elena_minimal',
      awards: 'Лучший минималист года',
      description: 'Специалист по тонким линиям и изящным минималистичным работам'
    },
  ];

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Команда</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Наши мастера</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Познакомьтесь с профессионалами, которые воплотят ваши идеи в жизнь
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <Card key={member.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-accent font-medium">{member.role}</p>
                </div>
              </div>
              <CardContent className="pt-6 space-y-4">
                <p className="text-sm text-muted-foreground">{member.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar size={16} className="text-accent" />
                    <span className="font-medium">Опыт: {member.experience}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Award size={16} className="text-accent" />
                    <span className="font-medium">{member.awards}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Instagram size={16} className="text-accent" />
                    <a href="#" className="hover:text-accent transition-colors font-medium">
                      {member.instagram}
                    </a>
                  </div>
                </div>

                <Badge variant="outline" className="w-full justify-center">
                  {member.specialization}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 font-medium"
            onClick={() => scrollToSection('booking')}
          >
            Записаться к мастеру
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;