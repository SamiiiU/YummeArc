import React, { useState } from 'react'
import whyYmmearc from '../../../Assets/Images/HomeImages/WhySecImg.png'
import { whyYummeArc } from '../../../WebData/HomeData'

const WhyYummearc = () => {
  const [isActive , setIsActive ] = useState(null)

  const handleActive = (onMouse) => {
    setIsActive(onMouse)
  }
  return (
    <div className='w-full h-screen  px-4 sm:px-12  2xl:px-80  pb-2 flex flex-col justify-center  py-20  min-h-screen relative space-y-20'>
      {/* <span className='w-full h-full absolute top-0 left-0 z-10 ' style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY1BvSNTI5R7BlFZzbuDXialnrDl8i2yCEVA&s")', backgroundSize: 'cover', backgroundPosition: 'center' }} /> */}


      {/* <span className='w-full h-1/2 absolute top-0 z-20 left-0  bg-gradient-to-b from-pinkText 
            to-transparent' />

      <span className='w-full h-full absolute top-0 z-20 left-0  bg-gradient-to-b from-transparent 
            to-pinkText/50' /> */}

      <div className='w-full z-30 flex justify-center items-center flex-col lg:flex-row gap-10 rounded-3xl max-h-64 '>
        {/* Home text  */}
        <div className='lg:w-1/2 w-full lg:items-start md:items-center  flex flex-col  gap-y-4 p-10'>

          <h1 className=' font-[600]  lg:text-[3.5rem] leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-purpleFrom to-purpleTo   '>
            Why YummeArc?
          </h1>
          <p className='text-xl '>At YumeArc, every design begins with your backstory, your lore, and your passion. We believe your VTuber model should feel like an extension of your soul-not just a pretty character.
          </p>


        </div>

        <div className='2xl:w-1/2 lg:w-1/2 w-full h-full pt-4 rounded-3xl' style={{ backgroundImage: `url("${whyYmmearc}")`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
          {/* <video width="100%" height="100%" controls style={{objectFit: 'contain', borderRadius: '20px'}}>
                    <source src={heroVid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}

        </div>




      </div>

      
      <div className='w-full grid grid-cols-2 grid-rows-2 gap-16 my-10'>
            {whyYummeArc.map((why , idx ) => (
              <div key={idx} onMouseEnter={() => handleActive(idx)} onMouseLeave={() => handleActive(null)} className='col-span-1 cursor-pointer  row-span-1 rounded-3xl bg-white flex flex-col justify-center items-center gap-y-6 px-8 py-6 transition-all ' style={{boxShadow : isActive == idx ? '0px 8px 15px 3px rgba(0, 0, 0, 0.1)' : '0px 1px 3px 2px rgba(0, 0, 0, 0.1)'}}>
                  <span className='text-5xl text-purpleFrom font-bold'>{why.icon}</span>

                  <h1 className='text-xl font-semibold'>{why.text}</h1>
                  {idx == 2 && (
                    <p className='-translate-y-4 '>(no NSFW, no demonic themes)</p>
                  )}
              </div>
            ))}
      </div>


      <div className='w-full flex flex-col gap-y-4 justify-center items-center'>
        <h1 className='font-bold text-4xl'>
            You’re not just buying a model.
        </h1>
        <h2 className='text-xl'>
            You’re investing in your virtual identity.
        </h2>
      </div>

    </div>
  )
}

export default WhyYummearc


