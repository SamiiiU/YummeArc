import React from 'react'
import MainNav from '../../Common/Navbar/MainNav'
import Hero from './PortfolioComps/Hero'
import Footer from '../../Common/Footer/Footer'
import PastWork from './PortfolioComps/PastWork'

const Portfolio = () => {
  return (
    <div className='w-full text-textColor bg-[#f2f2f2] font-orbitron'>
      <MainNav/>
      <Hero/>
      <PastWork/>

      <Footer/>

    </div>
  )
}

export default Portfolio
