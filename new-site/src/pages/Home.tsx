import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import WorkSection from '../components/home/WorkSection';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WorkSection />
    </>
  );
};

export default Home;
