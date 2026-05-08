import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import PortfolioPreview from '../components/PortfolioPreview';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <PortfolioPreview />
      <CTA />
    </>
  );
};

export default Home;