import React from 'react'
import MainNav from '../../Common/Navbar/MainNav'
import Hero from './HomeComps/Hero'
import WhyYummearc from './HomeComps/WhyYummearc'
import RecentWork from './HomeComps/RecentWork'
import OurProcess from './HomeComps/OurProcess'
import Testimonals from './HomeComps/Testimonals'
import CTA from '../../Common/CTAs/CTA'

const Home = () => {
  return (
    <div className='w-full text-textColor'>
      <MainNav/>
      <Hero/>
      <WhyYummearc/>
      <RecentWork/>
      <OurProcess/>
      <Testimonals/>
      <CTA/>

    </div>
  )
}

export default Home
