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
import { Star, Info, CheckCircle2, Camera } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ReviewFormSection = () => {
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: 'Спасибо за отзыв!',
      description: 'Ваш отзыв успешно отправлен и появится после модерации.',
    });
    e.currentTarget.reset();
    setRating(5);
  };

  const guidelines = [
    'Опишите ваш опыт работы с нашей студией',
    'Укажите, какой мастер и стиль вам понравились',
    'Поделитесь результатом и процессом',
    'Будьте честны — мы ценим объективную обратную связь',
  ];

  return (
    <section id="reviews" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
            Оставьте отзыв
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Поделитесь впечатлениями
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ваше мнение важно для нас. Расскажите о своем опыте работы с нашей студией
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Форма отзыва</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="review-name">Ваше имя *</Label>
                      <Input
                        id="review-name"
                        name="name"
                        required
                        placeholder="Иван Иванов"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="review-email">Email</Label>
                      <Input
                        id="review-email"
                        name="email"
                        type="email"
                        placeholder="ivan@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="review-style">Стиль татуировки *</Label>
                      <Select name="tattooStyle" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите стиль" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="realism">Реализм</SelectItem>
                          <SelectItem value="watercolor">Акварель</SelectItem>
                          <SelectItem value="geometry">Геометрия</SelectItem>
                          <SelectItem value="minimalism">Минимализм</SelectItem>
                          <SelectItem value="traditional">Традишнл</SelectItem>
                          <SelectItem value="blackwork">Блэкворк</SelectItem>
                          <SelectItem value="japanese">Японский</SelectItem>
                          <SelectItem value="tribal">Трайбл</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="review-artist">Мастер</Label>
                      <Select name="artist">
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите мастера" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="alex">Александр Черный</SelectItem>
                          <SelectItem value="maria">Мария Колор</SelectItem>
                          <SelectItem value="dmitry">Дмитрий Нео</SelectItem>
                          <SelectItem value="anna">Анна Лайн</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Оценка *</Label>
                    <div className="flex items-center space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                          className="transition-transform hover:scale-110"
                        >
                          <Star
                            size={36}
                            className={`${
                              star <= (hoveredRating || rating)
                                ? 'text-yellow-500 fill-yellow-500'
                                : 'text-gray-300'
                            } transition-colors`}
                          />
                        </button>
                      ))}
                      <span className="ml-2 text-sm font-medium text-muted-foreground">
                        {rating} из 5
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="review-text">Ваш отзыв *</Label>
                    <Textarea
                      id="review-text"
                      name="review"
                      required
                      placeholder="Расскажите о своих впечатлениях..."
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                    Отправить отзыв
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
                    <h3 className="font-bold mb-2">Как написать отзыв</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {guidelines.map((g, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle2
                            size={14}
                            className="text-accent flex-shrink-0 mt-0.5"
                          />
                          <span>{g}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Camera className="mx-auto text-accent mb-3" size={32} />
                <h3 className="font-bold mb-2">Прикрепите фото</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Поделитесь результатом в социальных сетях
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Загрузить фото
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewFormSection;