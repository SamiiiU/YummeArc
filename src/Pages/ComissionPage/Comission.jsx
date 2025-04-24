import React from 'react'
import MainNav from '../../Common/Navbar/MainNav'
import Hero from './ComissionComps/Hero'
import OurProcess from './ComissionComps/OurProcess'
import Packages from './ComissionComps/Packeges'

const Comission = () => {
  return (
    <div className='w-full text-textColor  bg-purpleTo relative'>
      <MainNav/>
      <Hero/>
      <OurProcess/>
      <Packages/>

    </div>
  )
}

export default Comission
