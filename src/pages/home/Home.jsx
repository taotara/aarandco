import React from 'react'
import ImageCarousel from '../../components/imageCarousel/ImageCarouse';
import AboutUsSection from '../../components/aboutUsSection/AboutUsSection';
import ServicesSection from '../../components/servicesSection/ServicesSection';
import TeamSection from '../../components/teamSection/TeamSection';

const Home = () => {
  return (
    <div className=''>
      <ImageCarousel />
      <AboutUsSection />
      <ServicesSection />
      <TeamSection />
    </div>
  );
}

export default Home