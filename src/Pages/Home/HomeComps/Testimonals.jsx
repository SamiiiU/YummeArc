import React, { useState } from 'react'
import { testimonals_home } from '../../../WebData/HomeData'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'

const Testimonals = () => {
  const [isActive, setIsActive] = useState(null)

  const handleActive = (onMouse) => {
    setIsActive(onMouse)
  }
  return (
    <div className='w-full  px-4 sm:px-12  2xl:px-80  flex flex-col    relative 
         py-20'>
      <AOSInitializer />
      <h1 data-aos="flip-up" className=' font-[600] text-center lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1]  '>
        What Our Client Says
      </h1>
      <p data-aos="fade-up" className='lg:text-xl text-lg w-full my-6 text-center '>At YumeArc, every customer brings a backstory, lore, passion. We they believe VTuber model should feel like an extension of your soul-not just a pretty character.
      </p>

      <div className='w-full flex flex-col  gap-8 mt-6'>
        {testimonals_home.map((testimonal, idx) => (
          <div data-aos="fade-up" key={idx} onMouseEnter={() => handleActive(idx)} onMouseLeave={() => handleActive(null)}
            
            className='w-full   relative grid grid-cols-2   transition-all ' >

            {idx % 2 == 0 ? (
              <div style={{ boxShadow: isActive == idx ? '0px 8px 15px 3px rgba(0, 0, 0, 0.1)' : '0px 1px 3px 2px rgba(0, 0, 0, 0.1)' }} className=' bg-white col-start-1 col-end-1 p-6 rounded-md'>
                <h1 className=''>"{testimonal.review}"</h1>
                <p className='text-lg font-bold'><i>~{testimonal.client_name}</i></p>
              </div>
            ) : (
              <div style={{ boxShadow: isActive == idx ? '0px 8px 15px 3px rgba(0, 0, 0, 0.1)' : '0px 1px 3px 2px rgba(0, 0, 0, 0.1)' }} className='bg-white  col-start-2 col-end-2 p-6 rounded-md'>
                <h1 className=''>"{testimonal.review}"</h1>
                <p className='text-lg font-bold'><i>~{testimonal.client_name}</i></p>
              </div>
            )}
          </div>
        ))}
      </div>



    </div>
  )
}

export default Testimonals
