import React, { useContext, useEffect, useState } from 'react';
import MainNav from '../../Common/Navbar/MainNav';
import Hero from './HomeComps/Hero';
import WhyYummearc from './HomeComps/WhyYummearc';
import RecentWork from './HomeComps/RecentWork';
import OurProcess from './HomeComps/OurProcess';
import Testimonals from './HomeComps/Testimonals';
import CTA from '../../Common/CTAs/CTA';
import Footer from '../../Common/Footer/Footer';
import WhatWeCreate from './HomeComps/WhatWeCreate';
import Heart from './HomeComps/Heart';
import Loader from '../../components/Loader';
import CommissionForm from '../../Common/ComissionForm';
import { ContextAPI } from '../../GlobalProvider/ContextAPI';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when this page mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Check if all images are loaded
    const images = document.images;
    let loadedCount = 0;

    if (images.length === 0) {
      setLoading(false); // No images
      return;
    }

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        setLoading(false);
      }
    };

    for (let img of images) {
      if (img.complete) {
        loadedCount++;
      } else {
        img.addEventListener('load', handleImageLoad);
        img.addEventListener('error', handleImageLoad); // avoid stuck loader on error
      }
    }

    if (loadedCount === images.length) {
      setLoading(false);
    }

    return () => {
      for (let img of images) {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageLoad);
      }
    };
  }, []);

  return (
    <div className="w-full font-inter overflow-x-hidden">
      {loading && <Loader text={"Home"}/>}

      <MainNav />
      <CommissionForm  />
      <Hero />
      <WhyYummearc />
      <WhatWeCreate />
      <RecentWork />
      <Heart />
      <OurProcess />
      <Testimonals />
      <CTA
        heading={"Ready to Start Your VTuber Journey?"}
        para={"Whether it’s your first model or a full rebrand we’re here to design with you, not just for you."}
        cta1={"Start a Commission"}
        cta2={"Contact Us"}
      />
      <Footer />
    </div>
  );
};

export default Home;
