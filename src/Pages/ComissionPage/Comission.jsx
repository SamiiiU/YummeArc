import React from 'react'
import MainNav from '../../Common/Navbar/MainNav'
import Hero from './ComissionComps/Hero'
import OurProcess from './ComissionComps/OurProcess'
import Packages from './ComissionComps/Packeges'
import FAQs from './ComissionComps/FAQs'
import CTA from '../../Common/CTAs/CTA'
import Footer from '../../Common/Footer/Footer'
import Costs from './ComissionComps/Costs'
import OrderFrom from './ComissionComps/OrderFrom'
import Terms from './ComissionComps/Terms'

const Comission = () => {
  return (
    <div className='w-full   font-inter overflow-x-hidden'>
      <MainNav/>
      <Hero/>
      <OurProcess/>
      <Costs/>
      <OrderFrom/>
      <Terms/>
      <CTA heading={"Start Your Commission"} para={"Tell us about your character, your dream, and how we can bring it to life.<br/>We’ll reply within 24 hours with your quote and next steps!"} cta1={"Start Your Request Form"} />
      <Footer/>
      

    </div>
  )
}

export default Comission
