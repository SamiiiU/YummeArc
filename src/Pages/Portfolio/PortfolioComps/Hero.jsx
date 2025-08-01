import React from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import heroImg from '../../../Assets/Images/portfolio/1.png'

const Hero = () => {
    return (
        <div className='w-full bg-secondaryDark text-headingDark pb-20  px-4 sm:px-12 xl:px-64  2xl:px-80  xl:pt-40 flex flex-col justify-center items-center relative min-h-screen'>
            <span className='w-full h-1/5 absolute bottom-0 z-20 right-0 bg-gradient-to-t from-primaryDark
                to-transparent' />
            <AOSInitializer />
            <h1 data-aos="flip-up" className='   lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] w-full text-center font-bold'>
                A Story in Every Model

            </h1>
            <p data-aos="fade-up" className='lg:text-2xl text-lg text-center mt-6'>
                A Showcase of Custom VTuber Worlds, Crafted with Emotion
            </p>

            <p data-aos="fade-up" className='lg:text-lg text-sm text-center mt-6'>
                From soft & charming to bold & wild, each model we build is a unique reflection of its creator.
                We let the art do most of the talking.
            </p>




            <button className=' my-6 px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md hover:-translate-y-2'>Request Your Own</button>

            <img src={heroImg} alt="" className='w-[800px]  ' />


        </div>
    )
}

export default Hero
