import React, { useState } from 'react'
import { our_process } from '../../../WebData/HomeData'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'

const OurProcess = () => {
    const [isActive , setIsActive ] = useState(null)

    const handleActive = (onMouse) => {
        setIsActive(onMouse)
    }
    return (
        <div className='w-full  px-4 sm:px-12  2xl:px-80  flex flex-col  items-center   relative 
        bg-gradient-to-b from-white to-purpleTo  py-20'>
            <AOSInitializer/>

            <h1 data-aos="flip-up" className='w-full text-center  font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] text-textColor  '>From Vision to Virtual Star</h1>
            <p data-aos="fade-up"  className='w-full text-center my-6 lg:text-xl text-lg '>We take care of every step—from concept to final render—with care, precision, and passion.</p>

            <div className='w-full grid sm:grid-cols-2 grid-cols-1 gap-8 mt-6'>
                {our_process.map((process , idx) => (
                    <div data-aos= "fade-up" key={idx} onMouseEnter={() => handleActive(idx)} onMouseLeave={() => handleActive(null)} 
                    style={{boxShadow : isActive == idx ? '0px 8px 15px 3px rgba(0, 0, 0, 0.1)' : '0px 1px 3px 2px rgba(0, 0, 0, 0.1)'}} className='col-span-1 row-span-1 p-4 bg-purpleTo flex rounded-md transition-all cursor-pointer'>
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
