import React from 'react'
import MainNav from '../../Common/Navbar/MainNav'
import Hero from './ComissionComps/Hero'
import OurProcess from './ComissionComps/OurProcess'
import Packages from './ComissionComps/Packeges'
import FAQs from './ComissionComps/FAQs'
import CTA from '../../Common/CTAs/CTA'
import Footer from '../../Common/Footer/Footer'

const Comission = () => {
  return (
    <div className='w-full text-textColor  bg-[#f2f2f2] relative font-orbitron'>
      <MainNav/>
      <Hero/>
      <OurProcess/>
      <Packages/>
      <FAQs/>
      <CTA heading={"Start Your Commission"} para={"Tell us about your character, your dream, and how we can bring it to life.<br/>We’ll reply within 48 hours with your quote and next steps!"} cta1={"Start Your Request Form"} />
      <Footer/>
      

    </div>
  )
}

export default Comission
