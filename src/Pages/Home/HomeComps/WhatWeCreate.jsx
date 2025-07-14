import React, { useState } from 'react'
import whyYmmearc from '../../../Assets/Images/HomeImages/WhySecImg.png'
import { recentModels, weCreate, whyYummeArc } from '../../../WebData/HomeData'
import { FollowerPointerCard } from '../../../components/ui/following-pointer'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'



const WhatWeCreate = () => {
    const [isActive, setIsActive] = useState(null)

    const handleActive = (onMouse) => {
        setIsActive(onMouse)
    }
    return (
        <div className='w-full px-4 bg-primaryTo sm:px-28  2xl:px-80  flex flex-col  items-center  relative space-y-20
         py-20 text-blackText'>
            <AOSInitializer />

            
            <h1 data-aos="flip-up" className='w-full text-left  font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1]   font-kaushans'>What We Create</h1>
            <div className='w-full grid md:grid-cols-3 grid-cols-1 xl:gap-16 lg:gap-8 gap-6 '>
                {weCreate.map((model, idx) => (
                    <div data-aos-duration="200" data-aos="flip-right" key={idx}  onMouseEnter={() => handleActive(idx)} onMouseLeave={() => handleActive(null)} 
                    style={{transform : isActive == idx ? 'scale(1.1)' : 'scale(1)' , boxShadow : isActive == idx ? '0px 8px 15px 3px rgba(0, 0, 0, 0.1)' : '0px 1px 3px 2px rgba(0, 0, 0, 0.1)'}}
                     className='flex-1 min-h-96 bg-purpleTo rounded-2xl overflow-hidden shadow-md transition-all cursor-pointer'>
                        <FollowerPointerCard title={model.name} className={"w-full  min-h-64 relative bg-gradient-to-t from-purpleText/30 to-purpleText"}>
                            <div className='w-full h-full absolute top-0 left-0' style={{ backgroundImage: `url(${model.model})`, backgroundSize: 'cover', backgroundPosition: 'top' }}></div>

                        </FollowerPointerCard>

                        <div className='w-full  flex flex-col p-10 bg-white'>
                            <h1 data-aos="fade-up" className='text-xl  font-bold'>{model.name}</h1>
                            <p data-aos="fade-up" className='mt-4 font-merryWeater'>{model.description} </p>
                        </div>



                    </div>
                ))}

            </div>

            <div className='w-full flex flex-col gap-y-4 justify-center items-center text-center'>
                <h1 className='font-semibold text-2xl'>
                    Have something custom in mind? Let’s make it real together. 💌

                </h1>
                <span className='text-xl bg-pastelPink text-white font-semibold px-8 py-2 rounded-md cursor-pointer transition-all duration-300 hover:scale-[105%] hover:drop-shadow-sm'>
                    Start a Custom Project
                </span>
            </div>


        </div>
    )
}

export default WhatWeCreate


