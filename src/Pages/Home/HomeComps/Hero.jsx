import React from 'react'
import heroVid from '../../../Assets/Videos/HomeHeroVideo.mp4'
import heroImg from '../../../Assets/Images/HomeImages/HeroImg.png'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import { FaArrowDown } from 'react-icons/fa'

const Hero = () => {
    return (

        <>
            <div className='w-full xl:h-[37rem] lg:h-[40rem] h-auto bg-primaryfrom text-purpleText   px-4 xl:px-28 sm:px-20  2xl:px-80   flex  relative'>
                <div className='px-5  z-40 rounded-md text-center py-4 text-xl absolute bottom-0  right-0 animate-fadeIn font-bold flex items-center gap-x-4'> Scroll To Explore <FaArrowDown/></div>

                {/* <span className='w-full h-full absolute top-0 left-0 z-20  bg-pinkText/50' /> */}

                <span className='w-full h-full absolute top-0 z-20 right-0 bg-gradient-to-tl from-primaryTo
            to-transparent' />


                <AOSInitializer duration={500} offset={20} />

                <div className='w-full z-30 flex justify-center  flex-col lg:flex-row gap-10 pt-28 '>
                    {/* Home text  */}
                    <div data-aos="fade-in" className='lg:w-1/2 w-full lg:items-start md:items-center pt-10 space-y-7 '>

                        <h1 className=' font-[600]  lg:text-[3.5rem] text-5xl leading-[1.1]'>
                            Custom VTuber Models Made with Emotion & Detail.

                        </h1>
                        <p className='text-xl text-blackText font-merryWeater'>We create anime-style VTuber characters and stream branding built on story, softness, and charm — every design speaks you.
                        </p>

                        <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg  '>
                            <button className=' px-8 py-2 text-white font-bold cursor-pointer transition-all duration-300 border-2 border-purpleText bg-purpleText text-center rounded-md hover:-translate-y-2'> View Portfolio</button>
                            <button className=' px-8 py-2  font-bold cursor-pointer transition-all duration-300 bg-white  text-pastelPink border-[1px] hover:-translate-y-2 border-blackText text-center rounded-md '>Start Your Commission</button>
                        </div>
                    </div>

                    <div data-aos="fade-in" className=' lg:w-1/2 w-full lg:h-full h-[30rem] pt-4  ' style={{ backgroundImage: `url("${heroImg}")`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />





                </div>

            </div>

        </>
    )
}

export default Hero
