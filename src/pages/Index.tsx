import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ArtistsSection from '@/components/sections/ArtistsSection';
import StylesSection from '@/components/sections/StylesSection';
import GallerySection from '@/components/sections/GallerySection';
import ProcessSection from '@/components/sections/ProcessSection';
import PricingSection from '@/components/sections/PricingSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import BookingSection from '@/components/sections/BookingSection';
import ReviewFormSection from '@/components/sections/ReviewFormSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ArtistsSection />
      <StylesSection />
      <GallerySection />
      <ProcessSection />
      <PricingSection />
      <TestimonialsSection />
      <ReviewFormSection />
      <FAQSection />
      <CTASection />
      <BookingSection />  
      <ContactSection />
    </Layout>
  );
};

export default Index;