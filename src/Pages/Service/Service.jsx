import React from 'react'
import MainNav from '../../Common/Navbar/MainNav'
import Hero from './sections/Hero'

import CTA from '../../Common/CTAs/CTA'

import Footer from '../../Common/Footer/Footer'
import Custom from './sections/Custom'
import Custom3D from './sections/Custom3D'
import Chibbi from './sections/Chibbi'
import Sec5_vtuber from './sections/Sec5_vtuber'
import Sec6_lorebased from './sections/Sec6_lorebased'
import Sec7_art2d from './sections/Sec7_art2d'
import Sec8_pfp from './sections/Sec8_pfp'
import Sec9_emote from './sections/Sec9_emote'
import Sec10_overlay from './sections/Sec10_overlay'
import Sec11_intro from './sections/Sec11_intro'

const Service = () => {
  return (
    <div className='w-full   font-inter overflow-x-hidden'>
      <MainNav/>
      <Hero/>
      <Custom/>
      <Custom3D/>
      <Chibbi/>
      <Sec5_vtuber/>
      <Sec6_lorebased/>
      <Sec7_art2d/>
      <Sec8_pfp/>
      <Sec9_emote/>
      <Sec10_overlay/>
      <Sec11_intro/>
      
      <CTA heading={"YumeArc is just getting started"} para={"To become the go-to studio for streamers who care deeply about their backstory, design, and authenticity.We're building a community of wholesome, passionate VTubers who love anime and want to stand out for the right reasons.And we'd love for you to be part of it."} cta1={"Commission a Model"} cta2={"Contact Us"} />
      <Footer/>
      

    </div>
  )
}

export default Service
