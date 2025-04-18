import React from 'react'
import heroVid from '../../../Assets/Videos/HomeHeroVideo.mp4'

const Hero = () => {
    return (
        <div className='w-full h-screen  px-4 sm:px-12  2xl:px-80  pb-20 flex  relative'>

            {/* <span className='w-full h-full absolute top-0 left-0 z-20  bg-pinkText/50' /> */}

            <span className='w-full h-1/2 absolute bottom-0 z-20 left-0 bg-gradient-to-b from-transparent 
            to-pinkText' />

            <span className='w-full h-full absolute top-0 z-20 left-0  bg-gradient-to-b from-pinkText 
            to-transparent' />

            <div className="w-full h-screen absolute top-0 left-0 z-10 overflow-hidden ">
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


            <div className='w-full z-30 flex justify-center items-center flex-col lg:flex-row gap-10 pt-36'>
                {/* Home text  */}
                <div className='lg:w-1/2 w-full lg:items-start md:items-center  flex flex-col  gap-y-4'>

                    <h1 className=' font-[600] text-pinkishWhite lg:text-[3.5rem] leading-[1.1]'>
                    Bring Your VTuber Dream to Life.
                    </h1>
                    <p className='text-xl text-pinkishWhite'>Custom anime-style VTuber models crafted with deep storytelling, rich detail, and heartfelt design.
                    </p>

                    <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg pt-6 '>
                        <button className=' px-8 py-2 text-white font-bold cursor-pointer transition-all duration-300 hover:bg-transparent bg-pinkText text-center rounded-md '> View Portfolio</button>
                        <button className=' px-8 py-2  font-bold cursor-pointer transition-all duration-300  text-white border-2 border-pinkishWhite hover:border-pinkText hover:text-pinkText text-center rounded-md '>Start Your Commission</button>
                    </div>
                </div>

                <div className='2xl:w-1/2 lg:w-1/2 w-full h-full pt-4 rounded-3xl' style={{ backgroundImage: 'url("https://cdn.kwork.com/files/portfolio/t3/92/dffbcb50f0cfbd6125889462ab09ad44466d5a77-1677148824.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    {/* <video width="100%" height="100%" controls style={{objectFit: 'contain', borderRadius: '20px'}}>
                    <source src={heroVid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}

                </div>


            </div>
        </div>
    )
}

export default Hero
