import React, { useState } from 'react'
import whyYmmearc from '../../../Assets/Images/HomeImages/WhySecImg.png'
import { recentModels, whyYummeArc } from '../../../WebData/HomeData'
import { FollowerPointerCard } from '../../../components/ui/following-pointer'



const RecentWork = () => {
    const [isActive, setIsActive] = useState(null)

    const handleActive = (onMouse) => {
        setIsActive(onMouse)
    }
    return (
        <div className='w-full  px-4 sm:px-12  2xl:px-80  flex flex-col  items-center   min-h-screen relative space-y-20
        bg-gradient-to-b from-white to-purpleTo  py-20'>

            {/* <div className='w-full z-30 flex justify-center items-center flex-col lg:flex-row gap-10 rounded-3xl  relative'>
                {/* Home text 
                <div className='lg:w-1/2 w-full lg:items-start justify-center md:items-center  flex flex-col  gap-y-4 p-10 min-h-[24rem]'>

                    <h1 className=' font-[600]  lg:text-[3.5rem] leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-purpleFrom to-purpleTo   '>
                        Our Recent Work
                    </h1>
                    <p className='text-xl '>At YumeArc, every design begins with your backstory, your lore, and your passion. We believe your VTuber model should feel like an extension of your soul-not just a pretty character.
                    </p>


                </div>

                <span className='lg:w-1/2 w-full h-full min-h-[24rem]' style={{ backgroundImage: `url("${whyYmmearc}")`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />


            </div> */}

            <h1 className='w-full text-center  font-[600]  lg:text-[3.5rem] leading-[1.1] text-textColor  '>Our Recent Models</h1>
            <div className='w-full flex justify-between items-center gap-10'>
                {recentModels.map((model, idx) => (
                    <div key={idx} className='flex-1 min-h-96 bg-purpleTo rounded-2xl overflow-hidden shadow-md'>
                        <FollowerPointerCard title={model.name} className={"w-full  min-h-64 relative"}>
                            <div className='w-full h-full absolute top-0 left-0' style={{ backgroundImage: `url(${model.model})`, backgroundSize: 'cover', backgroundPosition: 'top' }}></div>

                        </FollowerPointerCard>

                        <div className='w-full  flex flex-col p-10 bg-white'>
                            <h1 className='text-3xl text-center font-bold'>{model.name}</h1>
                            <p className='mt-4 text-center'>{model.description} </p>
                        </div>



                    </div>
                ))}

            </div>

            <div className='w-full flex flex-col gap-y-4 justify-center items-center'>
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


