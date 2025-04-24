import React from 'react'
import { our_process } from '../../../WebData/HomeData'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'

const OurProcess = () => {
    return (
        <div className='w-full   px-4 sm:px-12  2xl:px-80  py-10   relative'>
            <AOSInitializer/>
            <h1 data-aos="flip-up"  className='w-full text-center  font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] text-textColor  '>
                Our Process
            </h1>

            <div className='w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 mt-6 border-[1px] border-textColor  rounded-2xl p-6'>
                {our_process.map((process, idx) => (
                    <div data-aos="fade-in" key={idx} className='col-span-1 row-span-1 p-4   flex flex-col  rounded-md '>
                        <span className=' w-full flex justify-center items-center text-5xl mb-4'>
                            {process.icon}
                        </span>
                        <div className='px-5 w-full text-center'>
                            <h1 className='text-xl font-bold'>{process.heaiding}</h1>
                            <p>{process.para}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div  className='w-full flex justify-center itmes-center'>
                <p className='text-xl font-semibold text-center mt-6 bg-purpleTo sm:p-8 p-4 sm:-translate-y-20  inline-block'> Optional Add-ons: Outfit Variants,<br /> Expression Sheets, Lore PDFs</p>
            </div>
                


        </div>
    )
}

export default OurProcess
