import React from 'react'

const CTA = () => {
    return (
        <div className='w-full 2xl:px-80 bg-white flex flex-col justify-center items-center py-20   relative '>
                <h1 className=' font-[600] lg:text-[3.5rem] leading-[1.1]'>
                Your story deserves to be seen.
                </h1>
                <p className='text-xl my-6'>Let’s bring your dream VTuber model to life—with soul, style, and storytelling that matters.
                </p>

                <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg pt-6 '>
                    <button className=' px-8 py-2 text-white font-bold cursor-pointer transition-all duration-300  bg-blushPink text-center rounded-md '> Start a Commission</button>
                    <button className=' px-8 py-2  font-bold cursor-pointer transition-all duration-300 border-2   text-center rounded-md border-textColor'>Start Your Commission</button>
                </div>

        </div>
    )
}

export default CTA
