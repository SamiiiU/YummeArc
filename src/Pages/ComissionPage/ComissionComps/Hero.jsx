import React from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'

const Hero = () => {
    return (
        <div className='w-full   px-4 sm:px-12  2xl:px-80  py-10   relative xl:pt-40'>
            <AOSInitializer/>

            <h1 data-aos="flip-up" className=' font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] w-full text-center'>
            Ready to bring your VTuber to life?
            </h1>
            <p data-aos="fade-up" className='lg:text-xl text-lg text-center mt-6'>We’re honored you’re considering YumeArc.<br/> Our custom anime-style models are crafted with deep storytelling, rich aesthetics, and heartfelt care.

            </p>

            <p data-aos="zoom-out" className='text-xl font-semibold text-center mt-6'>Let’s turn your vision into something unforgettable.</p>

            <div data-aos="fade-up" className='w-full flex justify-center'><button className='left-1/2 px-8 py-2 text-white font-bold cursor-pointer transition-all duration-300 bg-textColor text-center rounded-full mt-6'> Start Your Request</button></div>




        </div>
    )
}

export default Hero
