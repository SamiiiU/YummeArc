import React, { useState } from 'react'
import whyYmmearc from '../../../Assets/Images/HomeImages/WhySecImg.png'
import { whyYummeArc } from '../../../WebData/HomeData'

const WhyYummearc = () => {
  const [isActive , setIsActive ] = useState(null)

  const handleActive = (onMouse) => {
    setIsActive(onMouse)
  }
  return (
    <div className='w-full 2xl:px-80 bg-white flex flex-col justify-center  pb-20  min-h-screen relative space-y-20'>

      <div className='w-full z-30 flex justify-center items-center flex-col lg:flex-row gap-10 rounded-3xl bg-gradient-to-b from-purpleFrom to-purpleTo relative pt-10'>
        {/* Home text  */}
        <div className='lg:w-1/2 w-full lg:items-start justify-center md:items-center  flex flex-col  gap-y-4 p-16 min-h-[24rem]'>

          <h1 className=' font-[600]  lg:text-[3.5rem] leading-[1.1]  '>
            Why YummeArc?
          </h1>
          <p className='text-xl '>At YumeArc, every design begins with your backstory, your lore, and your passion. We believe your VTuber model should feel like an extension of your soul-not just a pretty character.
          </p>

          <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg pt-6 '>
                        <button className=' px-8 py-2 text-white font-semibold cursor-pointer transition-all duration-300  bg-blushPink text-center rounded-md '> View Portfolio</button>
                        <button className=' px-8 py-2  font-semibold cursor-pointer transition-all duration-300 text-textColor border-2 bg-white text-center rounded-md '>Start Your Commission</button>
          </div>


        </div>

        <span className='lg:w-1/2 w-full h-full min-h-[26rem] mask-y-from-70% mask-y-to-90% ' style={{ backgroundImage: `url("${whyYmmearc}")`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}/>


      </div>

      
      <div className='w-full grid grid-cols-2 grid-rows-2 gap-16 my-10 px-4 sm:px-12'>
            {whyYummeArc.map((why , idx ) => (
              <div key={idx} onMouseEnter={() => handleActive(idx)} onMouseLeave={() => handleActive(null)} className='col-span-1 cursor-pointer  row-span-1 rounded-3xl bg-white flex flex-col justify-center items-center gap-y-6 px-8 py-6 transition-all ' style={{boxShadow : isActive == idx ? '0px 8px 15px 3px rgba(0, 0, 0, 0.1)' : '0px 1px 3px 2px rgba(0, 0, 0, 0.1)'}}>
                  <span className='text-5xl  font-bold'>{why.icon}</span>

                  <h1 className='text-xl font-semibold'>{why.text}</h1>
                  {idx == 2 && (
                    <p className='-translate-y-4 '>(no NSFW, no demonic themes)</p>
                  )}
              </div>
            ))}
      </div>


      <div className='w-full flex flex-col gap-y-4 justify-center items-center'>
        <h1 className='font-bold text-4xl'>
            You’re not just buying a model.
        </h1>
        <h2 className='text-xl'>
            You’re investing in your virtual identity.
        </h2>
      </div>

    </div>
  )
}

export default WhyYummearc


