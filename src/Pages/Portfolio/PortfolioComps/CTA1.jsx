import React from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import heroImg from '../../../Assets/Images/portfolio/4.png'
const CTA1 = () => {
    return (
        <section className='w-full bg-secondaryDark text-headingDark pb-10  px-4    flex flex-col  items-center relative  gap-y-10 text-center py-10'>
            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-primaryDark
                to-transparent' />

            <AOSInitializer />
            <h1 data-aos="flip-up" className='   lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] w-full  font-bold text-center'>
                Ready to Make Your <br /> Vision Come to Life?
            </h1>
            <p data-aos="fade-up" className='lg:text-xl text-lg text-center max-w-2xl '>
                Let’s bring your story, your character, and your vibe to the screen — crafted with heart by the artists at YummeArc.

            </p>

            <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg  '>
                <button className=' px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md hover:-translate-y-2'> Request a Commission</button>
                <button className=' px-8 py-2  font-bold cursor-pointer transition-all duration-300 bg-iconColor  text-headingDark border-[1px] hover:-translate-y-2 border-blackText text-center rounded-md '>Explore Our Services</button>
            </div>

            <img src={heroImg} alt="" className='absolute right-0 bottom-0 w-96' />
        </section>
    )
}

export default CTA1
