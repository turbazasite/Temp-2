import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from '@/components/ui/dialog';
import { images } from '@/data/siteData';
import { Heart, X, ChevronLeft, ChevronRight, Expand } from 'lucide-react';

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const allImages = images.gallery;

  const categories = [
    { name: 'Все работы', images: allImages },
    { name: 'Реализм', images: allImages.slice(0, 3) },
    { name: 'Акварель', images: allImages.slice(3, 6) },
    { name: 'Геометрия', images: allImages.slice(6, 9) },
  ];

  const [activeTab, setActiveTab] = useState('Все работы');

  const currentImages =
    categories.find((c) => c.name === activeTab)?.images || allImages;

  const openImage = (index: number) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);
  const nextImage = () =>
    setSelectedIndex((prev) => (prev === null ? 0 : (prev + 1) % currentImages.length));
  const prevImage = () =>
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev - 1 + currentImages.length) % currentImages.length
    );

  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
            Портфолио
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Галерея работ
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ознакомьтесь с нашими лучшими работами в различных стилях
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={activeTab === category.name ? 'default' : 'outline'}
              className={activeTab === category.name ? 'bg-accent hover:bg-accent/90' : ''}
              onClick={() => setActiveTab(category.name)}
            >
              {category.name}
              <Badge variant="secondary" className="ml-2 text-xs">
                {category.images.length}
              </Badge>
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group bg-muted"
              onClick={() => openImage(index)}
            >
              <img
                src={image}
                alt={`Работа ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                  <Expand className="text-black" size={22} />
                </div>
              </div>

              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                  <Heart size={16} />
                </button>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-sm font-medium">{activeTab}</p>
                <p className="text-white/70 text-xs">Мастер: Александр</p>
              </div>
            </div>
          ))}
        </div>

        {selectedIndex !== null && (
          <Dialog open onOpenChange={closeImage}>
            <DialogContent className="max-w-5xl p-0 overflow-hidden">
              <DialogTitle className="sr-only">Просмотр работы</DialogTitle>
              <div className="relative">
                <img
                  src={currentImages[selectedIndex]}
                  alt={`Работа ${selectedIndex + 1}`}
                  className="w-full h-auto max-h-[80vh] object-contain bg-black"
                />
                <button
                  onClick={closeImage}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90"
                >
                  <X size={20} />
                </button>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90"
                >
                  <ChevronRight size={20} />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                  {selectedIndex + 1} / {currentImages.length}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
};

export default GallerySection;