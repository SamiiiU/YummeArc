import React from 'react'
import MainNav from '../../Common/Navbar/MainNav'
import Hero from './HomeComps/Hero'
import WhyYummearc from './HomeComps/WhyYummearc'

const Home = () => {
  return (
    <div className='w-full bg-pink-50'>
      <MainNav/>
      <Hero/>
      <WhyYummearc/>
    </div>
  )
}

export default Home
