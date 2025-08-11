import React, { useEffect, useState } from 'react'
import MainNav from '../../Common/Navbar/MainNav'
import Footer from '../../Common/Footer/Footer'
import HeroSection from './sections/HeroSection'
import Story from './sections/Story'
import MeetArtist from './sections/MeetArtist'
import Mission from './sections/Mission'
import CreativeProcess from './sections/CreativeProcess'
import CTAsection from './sections/CTAsection'
import Loader from '../../components/Loader'

const About = () => {
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
    <div className='w-full   font-inter overflow-x-hidden'>
      {loading && <Loader text={"About Page"}/>} {/* ✅ Loader visible until images/content load */}

        <MainNav/>
            <HeroSection/>
            <Story/>
            <MeetArtist/>
            <Mission/>
            <CreativeProcess/>
            <CTAsection/>
        <Footer/>
    </div>
  )
}

export default About
