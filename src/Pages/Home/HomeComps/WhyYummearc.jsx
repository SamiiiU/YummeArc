import React, { useState } from 'react'
import whyYmmearc from '../../../Assets/Images/HomeImages/WhySecImg.png'
import { whyYummeArc } from '../../../WebData/HomeData'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import { BackgroundBeamsWithCollision } from '../../../components/ui/background-beams-with-collisions'

const WhyYummearc = () => {
  const [isActive, setIsActive] = useState(null)

  const handleActive = (onMouse) => {
    setIsActive(onMouse)
  }
  return (
    <BackgroundBeamsWithCollision className={"min-h-screen"}>
      <div className=' bg-gradient-to-br from-[#1E1B2E] to-[#292440] flex flex-col justify-center px-4 sm:px-28  2xl:px-80 py-20  min-h-screen text-[#DAD4F7] space-y-20'>
      <AOSInitializer />

      <h1 className='font-kaushans  text-5xl'>Why YummeArc?</h1>
      <div className='w-full grid sm:grid-cols-2 grid-cols-1 xl:gap-16 lg:gap-8 gap-6 mt-16 '>
        {whyYummeArc.map((why, idx) => (
          <div data-aos="zoom-in" key={idx} onMouseEnter={() => handleActive(idx)} onMouseLeave={() => handleActive(null)} className='col-span-1 cursor-pointer bg-opacity-40 backdrop-blur-sm  row-span-1 rounded-3xl  flex flex-col justify-center items-center gap-y-6 px-8 py-6 transition-all ' 
          style={{ boxShadow: isActive == idx ? '0px 8px 15px 3px rgba(250, 250, 250, 0.1)' : '0px 1px 3px 2px rgba(0, 0, 0, 0.1)' , transition: 'all 0.3s ease-in-out' }}>
            <span className='text-5xl  font-bold'>{why.icon}</span>

            <h1 className='text-xl font-semibold font-merryWeater'>{why.text}</h1>
            
            <p className='-translate-y-4 font-merryWeater text-center'>{why.para}</p>
          </div>
        ))}
      </div>

      <div className='w-full flex flex-col gap-y-4 justify-center items-center text-center'>
        <h1 data-aos="slide-up" className='font-bold sm:text-4xl text-2xl'>
          You’re not just buying a model.
        </h1>
        <h2 data-aos="slide-up" className='sm:text-xl text-lg'>
          You’re investing in your virtual identity.
        </h2>
      </div>

      




      

    </div>
    </BackgroundBeamsWithCollision>
  )
}

export default WhyYummearc


