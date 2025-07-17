import React from 'react'
import whyYmmearc from '../../../Assets/Images/HomeImages/WhySecImg.png'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'


const Heart = () => {
  return (
    <div className='w-full  z-30 grid lg:grid-cols-2 grid-cols-1 gap-10 sm:rounded-3xl bg-white/10 backdrop-blur-sm text-[#DAD4F7] relative pt-10'>
        <AOSInitializer />
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
    
  )
}

export default Heart
