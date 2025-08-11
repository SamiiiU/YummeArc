import React, { useEffect, useState } from 'react'
import MainNav from '../../Common/Navbar/MainNav'
import Hero from './ComissionComps/Hero'
import OurProcess from './ComissionComps/OurProcess'
import Packages from './ComissionComps/Packeges'
import FAQs from './ComissionComps/FAQs'
import CTA from '../../Common/CTAs/CTA'
import Footer from '../../Common/Footer/Footer'
import Costs from './ComissionComps/Costs'
import OrderFrom from './ComissionComps/OrderFrom'
import Terms from './ComissionComps/Terms'
import Loader from '../../components/Loader'

const Comission = () => {
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
      {loading && <Loader text={"Comission"}/>} {/* ✅ Loader visible until images/content load */}
      <MainNav/>
      <Hero/>
      <OurProcess/>
      <Costs/>
      <OrderFrom/>
      <Terms/>
      <CTA heading={"Start Your Commission"} para={"Tell us about your character, your dream, and how we can bring it to life.<br/>We’ll reply within 24 hours with your quote and next steps!"} cta1={"Start Your Request Form"} />
      <Footer/>
      

    </div>
  )
}

export default Comission
