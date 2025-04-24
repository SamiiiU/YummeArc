import React from 'react'
import MainNav from '../../Common/Navbar/MainNav'
import Hero from './AboutComps/Hero'

import CTA from '../../Common/CTAs/CTA'

const About = () => {
  return (
    <div className='w-full text-textColor overflow-x-hidden bg-pinkishWhite relative '>
      <MainNav/>
      <Hero/>
      
      <CTA heading={"Start Your Commission"} para={"Tell us about your character, your dream, and how we can bring it to life.<br/>We’ll reply within 48 hours with your quote and next steps!"} cta1={"Start Your Request Form"} />
      

    </div>
  )
}

export default About
