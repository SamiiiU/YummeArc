import React from 'react'
import MainNav from '../../Common/Navbar/MainNav'
import Hero from './PortfolioComps/Hero'
import Footer from '../../Common/Footer/Footer'
import Speak from './PortfolioComps/Speak'
import Stream from './PortfolioComps/Stream'
import CTA1 from './PortfolioComps/CTA1'
import Emotes from './PortfolioComps/Emotes'
import ArtScenes from './PortfolioComps/ArtScenes'
import PFP from './PortfolioComps/PFP'

const Portfolio = () => {
  return (
    <div className='w-full   font-inter overflow-x-hidden'>
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
