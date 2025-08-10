import React from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import Img6 from '../../../Assets/Images/about/6.png'

const CTAsection = () => {
  return (
    <section className='w-full bg-primaryDark text-headingDark pb-20  px-4 sm:px-12 xl:px-64  2xl:px-80  xl:pt-40 flex flex-col justify-start items-center relative sm:min-h-screen gap-y-10'>
            <span className='w-full h-1/5 absolute bottom-0 z-20 right-0 bg-gradient-to-t from-secondaryDark
                to-transparent' />

            <AOSInitializer/>

                        <h1 data-aos="flip-up" className='   lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] w-full text-center font-bold'>
                Ready to Bring Your Character to Life?
            </h1>
            <p data-aos="fade-up" className='lg:text-xl text-lg text-center mt-6'>
                Let’s create something unforgettable together. Whether you need a main VTuber model, expressive chibis, or custom stream panels we’re here to make it happen.


            </p>

            <div className='flex md:flex-row flex-col justify-evenly items-center w-full'>
                <span className=' my-6 px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md hover:-translate-y-2 max-h-fit'>Start Your Project</span>

                <img src={Img6} alt="" className='flex-1  max-w-[500px]' />
            </div>

    </section>
  )
}

export default CTAsection
