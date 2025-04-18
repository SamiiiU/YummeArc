import React from 'react'
import whyYmmearc from '../../../Assets/Images/HomeImages/WhySecImg.png'

const WhyYummearc = () => {
  return (
    <div className='w-full h-screen  px-4 sm:px-12  2xl:px-80  pb-2 flex flex-col py-20  min-h-screen relative'>
      <span className='w-full h-full absolute top-0 left-0 z-10 ' style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY1BvSNTI5R7BlFZzbuDXialnrDl8i2yCEVA&s")', backgroundSize: 'cover', backgroundPosition: 'center' }} />


      <span className='w-full h-1/2 absolute top-0 z-20 left-0  bg-gradient-to-b from-pinkText 
            to-transparent' />

      <span className='w-full h-full absolute top-0 z-20 left-0  bg-gradient-to-b from-transparent 
            to-pinkText/50' />

      <div className='w-full z-30 flex justify-center items-center flex-col lg:flex-row gap-10 rounded-3xl bg-pinkishWhite/30 max-h-64'>
        {/* Home text  */}
        <div className='lg:w-1/2 w-full lg:items-start md:items-center  flex flex-col  gap-y-4 p-10'>

          <h1 className=' font-[600] text-pinkishWhite lg:text-[3.5rem] leading-[1.1]  underline underline-offset-4  '>
            Why YummeArc?
          </h1>
          <p className='text-xl text-pinkishWhite'>At YumeArc, every design begins with your backstory, your lore, and your passion. We believe your VTuber model should feel like an extension of your soul-not just a pretty character.
          </p>


        </div>

        <div className='2xl:w-1/2 lg:w-1/2 w-full h-full pt-4 rounded-3xl' style={{ backgroundImage: `url("${whyYmmearc}")`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
          {/* <video width="100%" height="100%" controls style={{objectFit: 'contain', borderRadius: '20px'}}>
                    <source src={heroVid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}

        </div>




      </div>

      
      <div className='w-full grid grid-cols-2 grid-rows-2 gap-6 bg-white/30'>

      </div>

    </div>
  )
}

export default WhyYummearc


