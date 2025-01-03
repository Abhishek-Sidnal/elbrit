import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import IngredientsSection from '@/components/IngredientsSection';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto  ' >
      <Header />
      <div className='p-3'>

        <HeroSection />
        <FeaturesSection />
        <IngredientsSection />
        <BlogSection />
      </div>
      <Footer />
    </div>
  );
}
