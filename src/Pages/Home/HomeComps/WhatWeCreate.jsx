import React, { useContext, useState } from 'react'
import whyYmmearc from '../../../Assets/Images/HomeImages/WhySecImg.png'
import { recentModels, weCreate, whyYummeArc } from '../../../WebData/HomeData'
import { FollowerPointerCard } from '../../../components/ui/following-pointer'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import ShadePurple from '../../../Common/ShadePurple'
import { ContextAPI } from '../../../GlobalProvider/ContextAPI'



const WhatWeCreate = () => {
    const [isActive, setIsActive] = useState(null)
    const { setIsFormOpen} = useContext(ContextAPI)
    

    const handleActive = (onMouse) => {
        setIsActive(onMouse)
    }
    return (
        <div className='w-full px-4  sm:px-20 xl:px-28 3xl:px-80 bg-secondaryDark   flex flex-col  items-center  relative space-y-20
         py-10 text-textDark'>
            <AOSInitializer />

            {/* shading circle hai na idher sai start  */}
            <ShadePurple className={'-right-20 top-20 bg-gradient-to-r w-72 h-72'} />

            <ShadePurple className={'-left-24 bottom-20 bg-gradient-to-r w-72 h-72'} />

            {/* shading circle yaha sai khatam bus ok  */}

            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-primaryDark
                to-transparent' />
            <h1 data-aos="flip-up" className='w-full text-left  font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1]   font-kaushans text-headingDark'>What We Create for VTubers & Streamers</h1>
            <div className='w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-8 lg:gap-6 gap-4 '>
                {weCreate.map((model, idx) => (
                    <div data-aos-duration="200" data-aos="flip-right" key={idx} onMouseEnter={() => handleActive(idx)} onMouseLeave={() => handleActive(null)}
                        style={{ transform: isActive == idx ? 'scale(1.1)' : 'scale(1)', boxShadow: isActive == idx ? '0px 8px 15px 3px rgba(0, 0, 0, 0.1)' : '0px 1px 3px 2px rgba(0, 0, 0, 0.1)' }}
                        className='col-span-1 backdrop-blur-md rounded-2xl overflow-hidden shadow-md transition-all cursor-pointer w-full text-iconColor flex flex-col p-6 bg-primaryDark   justify-center items-center gap-8'>
                        

                            <span className='text-5xl'> {model.model}</span>
                            <h1 data-aos="fade-up" className='text-xl  font-bold'>{model.name}</h1>
                            <p data-aos="fade-up" className=' font-merryWeater'>{model.description} </p>

                    </div>
                ))}

            </div>

            <div className='w-full flex flex-col gap-y-4 justify-center items-center text-center z-30'>
                <h1 className='font-bold sm:text-4xl text-2xl text-headingDark'>
                    Have something custom in mind? Let’s make it real together

                </h1>
                <button onClick={() => setIsFormOpen(true)} className='px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md hover:-translate-y-2'>
                    Start a Custom Project 💌
                </button>
            </div>


        </div>
    )
}

export default WhatWeCreate


