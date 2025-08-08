import React from 'react'
import Img5 from '../../../Assets/Images/about/5.png'
import Img7 from '../../../Assets/Images/about/7.png'

import AOSInitializer from '../../../Common/AOS/AOSInitializer'
const CreativeProcess = () => {
    return (
        <div className='w-full bg-secondaryDark text-headingDark pb-20  px-4 sm:px-12 xl:px-64  2xl:px-80  flex md:flex-row flex-col justify-between items-center relative min-h-screen'>

            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-primaryDark
                to-transparent' />
            <AOSInitializer />


            <img src={Img5} alt="" className='md:w-[500px]  ' />

            <img src={Img7} alt="" className='md:w-[400px]  ' />

        </div>
    )
}

export default CreativeProcess
