import React from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import heroImg from '../../../Assets/Images/services/heroImg.png'

const Hero = () => {
    return (
        <div className='w-full bg-secondaryDark text-headingDark min-h-fit   px-4 sm:px-12 xl:px-64  2xl:px-80  pt-40 flex flex-col justify-center items-center relative'>
            <span className='w-full h-1/5 absolute bottom-0 z-20 right-0 bg-gradient-to-t from-primaryDark
                to-transparent' />
            <AOSInitializer/>
            <h1 data-aos="flip-up" className='   lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] w-full text-center font-bold'>
                Every Stream Deserves Story-Driven Art
            </h1>
            <p  data-aos="fade-up" className='lg:text-xl text-lg text-center mt-6'>We're not a Explore 10 handcrafted services made for VTubers who want emotion, detail, and anime-level energy.



            </p>

            
            <img src={heroImg} alt="" className='md:w-[800px] w-[400px] sm:-translate-y-20 '/>


        </div>
    )
}

export default Hero
