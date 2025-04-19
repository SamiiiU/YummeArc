import React, { useState } from 'react'
import whyYmmearc from '../../../Assets/Images/HomeImages/WhySecImg.png'
import { whyYummeArc } from '../../../WebData/HomeData'
import { FollowerPointerCard } from '../../../components/ui/following-pointer'



const RecentWork = () => {
    const [isActive, setIsActive] = useState(null)

    const handleActive = (onMouse) => {
        setIsActive(onMouse)
    }
    return (
        <div className='w-full h-screen  px-4 sm:px-12  2xl:px-80  pb-2 flex flex-col  items-center py-20  min-h-screen relative space-y-20'>

            <div className='w-full z-30 flex justify-center items-center flex-col lg:flex-row gap-10 rounded-3xl max-h-64 '>
                {/* Home text  */}
                <div className='lg:w-1/2 w-full lg:items-start md:items-center  flex flex-col  gap-y-4 p-10'>

                    <h1 className='font-[600] lg:text-[3.5rem] leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-purpleFrom to-purpleTo'>
                        Our Recent Work
                    </h1>

                    <p className='text-xl '>Each of our models is designed with love, lore, and light. Take a look at some of our latest commissions
                    </p>

                </div>

                <div className='2xl:w-1/2 lg:w-1/2 w-full h-full pt-4 rounded-3xl' style={{ backgroundImage: `url("${whyYmmearc}")`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                </div>
            </div>

            <FollowerPointerCard>
                <div className='w-96 h-96 bg-white'>
                    Here will be recent work
                </div>
            </FollowerPointerCard>


        </div>
    )
}

export default RecentWork


