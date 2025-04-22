import React from 'react'
import { our_process } from '../../../WebData/HomeData'

const OurProcess = () => {
    return (
        <div className='w-full  px-4 sm:px-12  2xl:px-80  flex flex-col  items-center   min-h-screen relative 
        bg-gradient-to-b from-white to-purpleTo  py-20'>

            <h1 className='w-full text-center  font-[600]  lg:text-[3.5rem] leading-[1.1] text-textColor  '>From Vision to Virtual Star</h1>
            <p className='w-full text-center my-6'>We take care of every step—from concept to final render—with care, precision, and passion.</p>

            <div className='w-full grid grid-cols-2 gap-8 mt-6'>
                {our_process.map((process , idx) => (
                    <div key={idx} className='col-span-1 row-span-1 p-4 bg-purpleTo flex rounded-md '>
                        <span className=' h-full  text-5xl'>
                            {process.icon} 
                        </span>
                        <div className='px-5'>
                            <h1 className='text-xl font-bold'>{process.heaiding}</h1>
                            <p>{process.para}</p>
                        </div>
                    </div>
                ))}
            </div>



        </div>
    )
}

export default OurProcess
