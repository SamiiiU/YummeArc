import React from 'react'
import { our_process } from '../../../WebData/HomeData'
import { model_packages } from '../../../WebData/ComissionData'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'

const Packages = () => {
    return (
        <div className='w-full   px-4 sm:px-12  2xl:px-80  py-10   relative'>
            <AOSInitializer/>
            <h1 data-aos="flip-up" className='w-full text-center  font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] text-textColor  '>
                Model Packages
            </h1>

            <div className='w-full grid lg:grid-cols-3 grid-cols-1 gap-8 mt-6  sm:p-6 '>
                {model_packages.map((item  , idx) => (
                    <div data-aos="fade-up" key={idx} className='col-span-1 row-span-1 p-6 bg-white rounded-3xl space-y-6 shadow-md text-center  '>
                        <h1 className='sm:text-3xl text-xl font-bold'>{item.name}</h1>

                        <p className='text-lg'>{item.desc}</p>

                        <span className='flex gap-x-6 w-full justify-center font-semibold text-xl'>Starting at {item.price}</span>
                    </div>
                ))}
            </div>

            <div className='w-full flex justify-center itmes-center'>
                <p className='text-xl font-semibold text-center mt-6 underline underline-offset-4 cursor-pointer  inline-block'> View Example Quote Sheet {"->"}</p>
            </div>
                


        </div>
    )
}

export default Packages
