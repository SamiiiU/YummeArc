import React from 'react'
import heroVid from '../../../Assets/Videos/HomeHeroVideo.mp4'
import heroImg from '../../../Assets/Images/HomeImages/HeroImg.png'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'

const Hero = () => {
    return (
        <div className='w-full h-auto   px-4 sm:px-12  2xl:px-80  pb-20 flex  relative'>
            <AOSInitializer duration={500} offset={20} />

            {/* <span className='w-full h-full absolute top-0 left-0 z-20  bg-pinkText/50' /> */}

            <span className='w-full h-full absolute top-0 z-20 right-0 bg-gradient-to-tl from-blushPink
            to-transparent' />

            <span className='w-full h-full absolute top-0 z-20 left-0  bg-gradient-to-br from-shadedBlue
            to-transparent' />

            {/* bg video  */}
            <div className="w-full h-full absolute top-0 left-0 z-10 overflow-hidden ">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={heroVid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>


            <div className='w-full z-30 flex justify-center  flex-col lg:flex-row gap-10 pt-36  '>
                {/* Home text  */}
                <div data-aos="fade-in" className='lg:w-1/2 w-full lg:items-start md:items-center  flex flex-col text-white gap-y-4 '>

                    <h1 className=' font-[600]  lg:text-[3.5rem] text-5xl leading-[1.1]'>
                    Bring Your VTuber Dream to Life.
                    </h1>
                    <p className='text-xl '>Custom anime-style VTuber models crafted with deep storytelling, rich detail, and heartfelt design.
                    </p>

                    <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg pt-6 '>
                        <button className=' px-8 py-2 text-white font-bold cursor-pointer transition-all duration-300 hover:bg-transparent bg-pinkText text-center rounded-md '> View Portfolio</button>
                        <button className=' px-8 py-2  font-bold cursor-pointer transition-all duration-300  text-white border-2 border-white hover:border-white text-center rounded-md '>Start Your Commission</button>
                    </div>
                </div>

                <div data-aos="fade-in" className='2xl:w-1/2 lg:w-1/2 w-full h-96 pt-4 rounded-3xl' style={{ backgroundImage: `url("${heroImg}")`, backgroundSize: 'contain', backgroundPosition: 'center' , backgroundRepeat : 'no-repeat' }}/>


               


            </div>
        </div>
    )
}

export default Hero
