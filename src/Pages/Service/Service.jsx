import React from 'react'
import MainNav from '../../Common/Navbar/MainNav'
import Hero from './AboutComps/Hero'

import CTA from '../../Common/CTAs/CTA'
import Philosophy from './AboutComps/Philosophy'
import Meet_Artist from './AboutComps/Meet_Artist'
import Vision from './AboutComps/Vision'
import Footer from '../../Common/Footer/Footer'
import Custom from './AboutComps/Custom'
import Custom3D from './AboutComps/Custom3D'
import Chibbi from './AboutComps/Chibbi'

const Service = () => {
  return (
    <div className='w-full   font-inter overflow-x-hidden'>
      <MainNav/>
      <Hero/>
      <Custom/>
      <Custom3D/>
      <Chibbi/>
      <CTA heading={"YumeArc is just getting started"} para={"To become the go-to studio for streamers who care deeply about their backstory, design, and authenticity.We're building a community of wholesome, passionate VTubers who love anime and want to stand out for the right reasons.And we'd love for you to be part of it."} cta1={"Commission a Model"} cta2={"Contact Us"} />
      <Footer/>
      

    </div>
  )
}

export default Service
