import React from 'react'
import MainNav from '../../Common/Navbar/MainNav'
import Hero from './PortfolioComps/Hero'
import Footer from '../../Common/Footer/Footer'
import PastWork from './PortfolioComps/PastWork'
import Speak from './PortfolioComps/Speak'
import Stream from './PortfolioComps/Stream'
import ShowCase from './PortfolioComps/ShowCase'
import CTA1 from './PortfolioComps/CTA1'

const Portfolio = () => {
  return (
    <div className='w-full   font-inter overflow-x-hidden'>
      <MainNav/>
      <Hero/>
      <Speak/>
      <Stream/>
      <ShowCase/>
      <CTA1/>

      <Footer/>

    </div>
  )
}

export default Portfolio
