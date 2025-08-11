import React, { useEffect, useState } from 'react';
import MainNav from '../../Common/Navbar/MainNav';
import Hero from './sections/Hero';
import Footer from '../../Common/Footer/Footer';
import Custom from './sections/Custom';
import Custom3D from './sections/Custom3D';
import Chibbi from './sections/Chibbi';
import Sec5_vtuber from './sections/Sec5_vtuber';
import Sec6_lorebased from './sections/Sec6_lorebased';
import Sec7_art2d from './sections/Sec7_art2d';
import Sec8_pfp from './sections/Sec8_pfp';
import Sec9_emote from './sections/Sec9_emote';
import Sec10_overlay from './sections/Sec10_overlay';
import Sec11_intro from './sections/Sec11_intro';
import FAQs from './sections/FAQs';
import CTA from './sections/CTA';
import Loader from '../../components/Loader'; // ✅ Make sure loader is imported

const Service = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Always scroll to top on page load
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Show loader for a short duration (e.g., 1.2s)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full font-inter overflow-x-hidden">
      {loading && <Loader text={"Services"}/>} {/* ✅ Loader visible until images/content load */}

      <MainNav />
      <Hero />
      <Custom />
      <Custom3D />
      <Chibbi />
      <Sec5_vtuber />
      <Sec6_lorebased />
      <Sec7_art2d />
      <Sec8_pfp />
      <Sec9_emote />
      <Sec10_overlay />
      <Sec11_intro />
      <FAQs />
      <CTA />
      <Footer />
    </div>
  );
};

export default Service;
