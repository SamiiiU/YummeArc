import React from 'react'

const CTA = ({heading , para , cta1 , cta2}) => {
    return (
        <div className='w-full 2xl:px-80 px-8 bg-white flex flex-col justify-center items-center py-20   relative text-center'>
                <h1 className=' font-[600] lg:text-[3.5rem] text-5xl leading-[1.1]'>
                {heading}
                </h1>
                <p className='lg:text-xl text-lg my-6' dangerouslySetInnerHTML={{__html : para}}>
                </p>

                <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg pt-6 '>
                    <button className=' px-8 py-2 text-white font-bold cursor-pointer transition-all duration-300  bg-blushPink text-center rounded-md '>{cta1}</button>
                    {cta2 && (<button className=' px-8 py-2  font-bold cursor-pointer transition-all duration-300 border-2   text-center rounded-md border-textColor'>{cta2}</button>)}
                </div>

        </div>
    )
}

export default CTA
