import React from 'react'
import MainNav from '../../Common/Navbar/MainNav'
import Hero from './HomeComps/Hero'
import WhyYummearc from './HomeComps/WhyYummearc'
import RecentWork from './HomeComps/RecentWork'
import OurProcess from './HomeComps/OurProcess'
import Testimonals from './HomeComps/Testimonals'
import CTA from '../../Common/CTAs/CTA'
import Footer from '../../Common/Footer/Footer'
import WhatWeCreate from './HomeComps/WhatWeCreate'
import Heart from './HomeComps/Heart'

const Home = () => {
  return (
    <div className='w-full   font-inter overflow-x-hidden'>
      <MainNav/>
      <Hero/>
      <WhyYummearc/>
      <WhatWeCreate/>
      <RecentWork/>

      <Heart/>
      <OurProcess/>
      <Testimonals/>
      <CTA heading={"Ready to Start Your VTuber Journey?"} para={"Whether it’s your first model or a full rebrand we’re here to design with you, not just for you."} cta1={"Start a Commission"} cta2={"Contact Us"}/>

      <Footer/>
    </div>
  )
}

export default Home
