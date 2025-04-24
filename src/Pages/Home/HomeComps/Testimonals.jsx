import React, { useState } from 'react'
import { testimonals_home } from '../../../WebData/HomeData'

const Testimonals = () => {
  const [isActive , setIsActive ] = useState(null)

  const handleActive = (onMouse) => {
    setIsActive(onMouse)
  }
  return (
    <div className='w-full  px-4 sm:px-12  2xl:px-80  flex flex-col    relative 
        bg-gradient-to-b from-white to-purpleTo  py-20'>
            <h1 className=' font-[600] text-center lg:text-[3.5rem] text-5xl leading-[1.1]  '>
            What Our Client Says
            </h1>
          <p className='lg:text-xl text-lg w-full my-6 text-center '>At YumeArc, every customer brings a backstory, lore, passion. We they believe VTuber model should feel like an extension of your soul-not just a pretty character.
          </p>

          <div className='w-full grid sm:grid-cols-2 grid-cols-1 gap-8 mt-6'>
                {testimonals_home.map((testimonal , idx) => (
                    <div key={idx} onMouseEnter={() => handleActive(idx)} onMouseLeave={() => handleActive(null)} 
                    style={{boxShadow : isActive == idx ? '0px 8px 15px 3px rgba(0, 0, 0, 0.1)' : '0px 1px 3px 2px rgba(0, 0, 0, 0.1)'}}
                    className='col-span-1 row-span-1  bg-purpleTo  rounded-md p-6 transition-all cursor-pointer' >

                            <h1 className=''>"{testimonal.review}"</h1>
                            <p className='text-lg font-bold'><i>~{testimonal.client_name}</i></p>
                    </div>
                ))}
            </div>

            
      
    </div>
  )
}

export default Testimonals
