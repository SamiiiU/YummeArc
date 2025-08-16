import React, { useContext, useEffect, Suspense, lazy } from 'react';
import Loader from '../../components/Loader';
import { ContextAPI } from '../../GlobalProvider/ContextAPI';

// ✅ Lazy imports
const MainNav = lazy(() => import('../../Common/Navbar/MainNav'));
const Hero = lazy(() => import('./ComissionComps/Hero'));
const OurProcess = lazy(() => import('./ComissionComps/OurProcess'));
const Packages = lazy(() => import('./ComissionComps/Packeges'));
const FAQs = lazy(() => import('./ComissionComps/FAQs'));
const CTA = lazy(() => import('../../Common/CTAs/CTA'));
const Footer = lazy(() => import('../../Common/Footer/Footer'));
const Costs = lazy(() => import('./ComissionComps/Costs'));
const OrderFrom = lazy(() => import('./ComissionComps/OrderFrom'));
const Terms = lazy(() => import('./ComissionComps/Terms'));
const CommissionForm = lazy(() => import('../../Common/ComissionForm'));

const Comission = () => {
  const { loading, setLoading } = useContext(ContextAPI);

  useEffect(() => {
    // Scroll to top when page mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Check if all images are loaded
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
    <div className="w-full font-inter overflow-x-hidden">
      {loading && <Loader text="Comission" />}
      <Suspense fallback={<Loader text="Loading Commission Page..." />}>
        <MainNav />
        <CommissionForm />
        <Hero />
        <OurProcess />
        <Costs />
        <OrderFrom />
        <Terms />
        <CTA
          heading="Start Your Commission"
          para="Tell us about your character, your dream, and how we can bring it to life.<br/>We’ll reply within 24 hours with your quote and next steps!"
          cta1="Start Your Request Form"
        />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Comission;
