import React from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'

const Hero = () => {
    return (
        <div className='w-full   px-4 sm:px-12  2xl:px-80  py-10  xl:pt-40'>

            <AOSInitializer/>
            <h1 data-aos="flip-up" className=' font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] w-full text-center'>
                More than just models YumeArc is where your story begins.
            </h1>
            <p  data-aos="fade-up" className='lg:text-xl font-mPlus text-lg text-center mt-6'>We're not a factory for faces. We're anime lovers, storytellers,
                and character builders who believe every VTuber deserves a design
                that feels real.


            </p>

            <p data-aos="zoom-in" className='text-xl font-semibold text-center mt-6 font-mPlus'>

            Every model we create is built with deep respect for your lore, visual identity, and dreams..</p>

            <div  data-aos="fade-up" className='w-full flex justify-center'><button className='left-1/2 px-8 py-2 text-white font-bold cursor-pointer transition-all duration-300 bg-textColor text-center rounded-full mt-6'> Start Your Request</button></div>




        </div>
    )
}

export default Hero
