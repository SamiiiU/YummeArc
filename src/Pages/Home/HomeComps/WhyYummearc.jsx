import React, { useState } from 'react'
import whyYmmearc from '../../../Assets/Images/HomeImages/WhySecImg.png'
import { whyYummeArc } from '../../../WebData/HomeData'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'

const WhyYummearc = () => {
  const [isActive, setIsActive] = useState(null)

  const handleActive = (onMouse) => {
    setIsActive(onMouse)
  }
  return (
    <div className=' bg-white flex flex-col justify-center  pb-20  min-h-screen  space-y-20'>
      <AOSInitializer />


      <div className='w-full grid sm:grid-cols-2 grid-cols-1 xl:gap-16 lg:gap-8 gap-6 mt-16 px-4 sm:px-12 2xl:px-80'>
        {whyYummeArc.map((why, idx) => (
          <div data-aos="zoom-in" key={idx} onMouseEnter={() => handleActive(idx)} onMouseLeave={() => handleActive(null)} className='col-span-1 cursor-pointer  row-span-1 rounded-3xl bg-white flex flex-col justify-center items-center gap-y-6 px-8 py-6 transition-all ' style={{ boxShadow: isActive == idx ? '0px 8px 15px 3px rgba(0, 0, 0, 0.1)' : '0px 1px 3px 2px rgba(0, 0, 0, 0.1)' }}>
            <span className='text-5xl  font-bold'>{why.icon}</span>

            <h1 className='text-xl font-semibold'>{why.text}</h1>
            {idx == 2 && (
              <p className='-translate-y-4 '>(no NSFW, no demonic themes)</p>
            )}
          </div>
        ))}
      </div>

      <div className='w-full 2xl:px-80 z-30 grid lg:grid-cols-2 grid-cols-1 gap-10 sm:rounded-3xl bg-gradient-to-b from-purpleFrom to-purpleTo relative pt-10'>
        {/* Home text  */}
        <div className='col-span-1 lg:text-center justify-center md:items-center  flex flex-col  gap-y-4 sm:p-16 p-4 min-h-[24rem]'>

          <h1 data-aos="fade-right" className=' font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1]  '>
            Why YummeArc?
          </h1>
          <p data-aos="fade-right" className='lg:text-xl text-lg '>At YumeArc, every design begins with your backstory, your lore, and your passion. We believe your VTuber model should feel like an extension of your soul-not just a pretty character.
          </p>

          <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg pt-6 '>
            <button data-aos="fade-up" data-aos-delay="200" className=' px-8 py-2 text-white font-semibold cursor-pointer transition-all duration-300  bg-blushPink text-center rounded-md '> View Portfolio</button>
            <button data-aos="fade-up" data-aos-delay="200" className=' px-8 py-2  font-semibold cursor-pointer transition-all duration-300 text-textColor border-2 bg-white text-center rounded-md '>Start Your Commission</button>
          </div>


        </div>

        <div data-aos="fade-top" className='col-span-1 h-full min-h-[26rem] ' style={{ backgroundImage: `url("${whyYmmearc}")`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />


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
  )
}

export default WhyYummearc


