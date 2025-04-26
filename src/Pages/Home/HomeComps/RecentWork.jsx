import React, { useState } from 'react'
import whyYmmearc from '../../../Assets/Images/HomeImages/WhySecImg.png'
import { recentModels, whyYummeArc } from '../../../WebData/HomeData'
import { FollowerPointerCard } from '../../../components/ui/following-pointer'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'



const RecentWork = () => {
    const [isActive, setIsActive] = useState(null)

    const handleActive = (onMouse) => {
        setIsActive(onMouse)
    }
    return (
        <div className='w-full  px-4 sm:px-12  2xl:px-80  flex flex-col  items-center  relative space-y-20
        bg-gradient-to-b from-white to-purpleTo  py-20'>
            <AOSInitializer />

            
            <h1 data-aos="flip-up" className='w-full text-center  font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] text-textColor  '>Our Recent Models</h1>
            <div className='w-full grid md:grid-cols-3 grid-cols-1 xl:gap-16 lg:gap-8 gap-6 '>
                {recentModels.map((model, idx) => (
                    <div data-aos-duration="200" data-aos="flip-right" key={idx}  onMouseEnter={() => handleActive(idx)} onMouseLeave={() => handleActive(null)} 
                    style={{transform : isActive == idx ? 'scale(1.1)' : 'scale(1)' , boxShadow : isActive == idx ? '0px 8px 15px 3px rgba(0, 0, 0, 0.1)' : '0px 1px 3px 2px rgba(0, 0, 0, 0.1)'}}
                     className='flex-1 min-h-96 bg-purpleTo rounded-2xl overflow-hidden shadow-md transition-all cursor-pointer'>
                        <FollowerPointerCard title={model.name} className={"w-full  min-h-64 relative"}>
                            <div className='w-full h-full absolute top-0 left-0' style={{ backgroundImage: `url(${model.model})`, backgroundSize: 'cover', backgroundPosition: 'top' }}></div>

                        </FollowerPointerCard>

                        <div className='w-full  flex flex-col p-10 bg-white'>
                            <h1 data-aos="fade-up" className='text-3xl text-center font-bold'>{model.name}</h1>
                            <p data-aos="fade-up" className='mt-4 text-center'>{model.description} </p>
                        </div>



                    </div>
                ))}

            </div>

            <div className='w-full flex flex-col gap-y-4 justify-center items-center text-center'>
                <h1 className='font-bold text-4xl'>
                    Extremely detailed high quality finishes
                </h1>
                <h2 className='text-xl'>
                    You are note just buying a model.
                </h2>
            </div>


        </div>
    )
}

export default RecentWork


