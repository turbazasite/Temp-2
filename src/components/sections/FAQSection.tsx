import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Search, MessageCircle } from 'lucide-react';
import { faqItems } from '@/data/siteData';

const FAQSection = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Все');

  const categories = ['Все', 'Процесс', 'Цены', 'Здоровье', 'Подготовка'];

  const categorizedFaqs: Record<string, number[]> = {
    Процесс: [0, 1, 2, 5],
    Цены: [3, 4],
    Здоровье: [6],
    Подготовка: [7],
  };

  const filteredFaqs = faqItems.filter((faq, index) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === 'Все' ||
      (categorizedFaqs[activeCategory] || []).includes(index);
    return matchesSearch && matchesCategory;
  });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Ответы на самые популярные вопросы о татуировках и нашей студии
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative mb-6">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              size={18}
            />
            <Input
              placeholder="Поиск по вопросам..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {categories.map((cat) => (
              <Button
                key={cat}
                size="sm"
                variant={activeCategory === cat ? 'default' : 'outline'}
                className={activeCategory === cat ? 'bg-accent hover:bg-accent/90' : ''}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>

          {filteredFaqs.length > 0 ? (
            <Accordion type="single" collapsible className="space-y-3">
              {filteredFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border rounded-lg px-6 bg-card"
                >
                  <AccordionTrigger className="text-left font-bold hover:text-accent hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-medium pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <p>По вашему запросу ничего не найдено</p>
            </div>
          )}

          <div className="mt-10 p-6 bg-accent/5 border border-accent/20 rounded-lg text-center">
            <MessageCircle className="mx-auto text-accent mb-3" size={32} />
            <h3 className="font-bold text-lg mb-2">Не нашли ответ?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Наши мастера всегда готовы ответить на ваши вопросы
            </p>
            <Button
              className="bg-accent hover:bg-accent/90"
              onClick={() => scrollToSection('contact')}
            >
              Задать вопрос
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;