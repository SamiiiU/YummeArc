import React, { useState } from 'react'
import { our_philosophy } from '../../../WebData/AboutData'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'

const Philosophy = () => {
    const [isActive, setIsActive] = useState(null)

    const handleActive = (onMouse) => {
        setIsActive(onMouse)
    }
    return (
        <div className='w-full  px-4 sm:px-12  2xl:px-80  flex flex-col  items-center   relative 
        bg-gradient-to-b from-white to-purpleTo  py-20'>
            <AOSInitializer/>

            <h1 data-aos="flip-up" className='w-full text-center  font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] text-textColor  '>Our Philosophy - What Sets Us Apart</h1>
            <p data-aos="fade-up" className='w-full text-center my-6 lg:text-xl text-lg '>We take care of every step—from concept to final render—with care, precision, and passion.</p>

            <div className='w-full grid sm:grid-cols-2 grid-cols-1 gap-8 mt-6'>
                {our_philosophy.map((process, idx) => (
                    <div data-aos="fade-up" key={idx} onMouseEnter={() => handleActive(idx)} onMouseLeave={() => handleActive(null)}
                        style={{ boxShadow: isActive == idx ? '0px 8px 15px 3px rgba(0, 0, 0, 0.1)' : '0px 1px 3px 2px rgba(0, 0, 0, 0.1)' }} className='col-span-1 row-span-1 p-8 bg-white  rounded-md transition-all cursor-pointer'>

                        <div className=' flex justify-center items-center gap-x-6 '>
                            <span className=' h-full  text-3xl'>
                                {process.icon}
                            </span>
                            <h1 className='text-xl font-bold '>{process.heading}</h1>
                        </div>
                        <p className='text-center mt-6'>{process.desc}</p>
                        </div>
                ))}
            </div>



        </div>
    )
}

export default Philosophy
