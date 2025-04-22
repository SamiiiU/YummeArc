import React from 'react'
import { our_process, testimonals_home } from '../../../WebData/HomeData'

const Testimonals = () => {
  return (
    <div className='w-full  px-4 sm:px-12  2xl:px-80  flex flex-col   min-h-screen relative 
        bg-gradient-to-b from-white to-purpleTo  py-20'>
            <h1 className=' font-[600] text-center lg:text-[3.5rem] leading-[1.1]  '>
            What Our Client Says
            </h1>
          <p className='text-xl w-full my-6 text-center '>At YumeArc, every customer brings a backstory, lore, passion. We they believe VTuber model should feel like an extension of your soul-not just a pretty character.
          </p>

          <div className='w-full grid grid-cols-2 gap-8 mt-6'>
                {testimonals_home.map((testimonal , idx) => (
                    <div key={idx} className='col-span-1 row-span-1  bg-purpleTo  rounded-md p-6'>

                            <h1 className=''>"{testimonal.review}"</h1>
                            <p className='text-lg font-bold'><i>~{testimonal.client_name}</i></p>
                    </div>
                ))}
            </div>

            
      
    </div>
  )
}

export default Testimonals
