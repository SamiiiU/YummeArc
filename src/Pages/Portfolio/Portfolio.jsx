import React, { useEffect, useState } from 'react'
import MainNav from '../../Common/Navbar/MainNav'
import Hero from './PortfolioComps/Hero'
import Footer from '../../Common/Footer/Footer'
import Speak from './PortfolioComps/Speak'
import Stream from './PortfolioComps/Stream'
import CTA1 from './PortfolioComps/CTA1'
import Emotes from './PortfolioComps/Emotes'
import ArtScenes from './PortfolioComps/ArtScenes'
import PFP from './PortfolioComps/PFP'
import Loader from '../../components/Loader'

const Portfolio = () => {
   const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
  
      // Wait for all images to load
      const images = document.images;
      let loadedCount = 0;
  
      if (images.length === 0) {
        setLoading(false);
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
          img.addEventListener('error', handleImageLoad);
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
      {loading && <Loader text={"Portfolio"}/>} {/* ✅ Loader visible until images/content load */}
      <MainNav/>
      <Hero/>
      <Speak/>
      <Stream/>
      <Emotes/>
      <ArtScenes/>
      <PFP/>
      <CTA1/>
      <Footer/>

    </div>
  )
}

export default Portfolio
