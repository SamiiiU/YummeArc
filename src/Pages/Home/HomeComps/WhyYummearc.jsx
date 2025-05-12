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
      <div className=' bg-blackText flex flex-col justify-center px-4 sm:px-28  2xl:px-80 py-20  min-h-screen text-white space-y-20'>
      <AOSInitializer />

      <h1 className='font-kaushans  text-5xl'>Why YummeArc?</h1>
      <div className='w-full grid sm:grid-cols-2 grid-cols-1 xl:gap-16 lg:gap-8 gap-6 mt-16 '>
        {whyYummeArc.map((why, idx) => (
          <div data-aos="zoom-in" key={idx} onMouseEnter={() => handleActive(idx)} onMouseLeave={() => handleActive(null)} className='col-span-1 cursor-pointer  row-span-1 rounded-3xl  flex flex-col justify-center items-center gap-y-6 px-8 py-6 transition-all ' style={{ boxShadow: isActive == idx ? '0px 8px 15px 3px rgba(0, 0, 0, 0.1)' : '0px 1px 3px 2px rgba(0, 0, 0, 0.1)' }}>
            <span className='text-5xl  font-bold'>{why.icon}</span>

            <h1 className='text-xl font-semibold font-merryWeater'>{why.text}</h1>
            {idx == 2 && (
              <p className='-translate-y-4 font-merryWeater'>(no NSFW, no demonic themes)</p>
            )}
          </div>
        ))}
      </div>

      <div className='w-full  z-30 grid lg:grid-cols-2 grid-cols-1 gap-10 sm:rounded-3xl bg-white/10 text-white relative pt-10'>
        {/* Home text  */}
        <div className='col-span-1  justify-center text-left  flex flex-col  gap-y-4 sm:p-16 p-4 min-h-[24rem]'>

          <h1 data-aos="fade-right" className=' font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1]  '>
          The Heart Behind Every Model
          </h1>
          <p data-aos="fade-right" className='font-merryWeater lg:text-xl text-lg '>At YummeArc, every model begins with your story — your lore, your vibe, your soul. We believe your VTuber avatar shouldn’t just look good… it should feel like a reflection of you. Not just a character. A legacy.

          </p>

          <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg pt-6 '>
            <button data-aos="fade-up" data-aos-delay="200" className=' px-8 py-2  font-semibold cursor-pointer transition-all duration-300 text-textColor border-2 bg-purpleText text-center rounded-md '>Commission</button>
            <button data-aos="fade-up" data-aos-delay="200" className=' px-8 py-2 text-white font-semibold cursor-pointer transition-all duration-300  bg-blushPink text-center rounded-md '> View Portfolio</button>
          </div>


        </div>

        <div data-aos="fade-top" className='col-span-1 h-full min-h-[26rem] ' style={{ backgroundImage: `url("${whyYmmearc}")`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />


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


