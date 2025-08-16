import React, { useContext } from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import ShadePurple from '../../../Common/ShadePurple'
import { ContextAPI } from '../../../GlobalProvider/ContextAPI'


const Custom3D = () => {
        const {setIsFormOpen} = useContext(ContextAPI)
    
    return (
        <div className='w-full  z-30 grid lg:grid-cols-2 grid-cols-1 gap-10 px-4  sm:px-20 xl:px-28 3xl:px-80  text-textDark bg-secondaryDark relative py-10'>
            <AOSInitializer />
            {/* shading circle hai na idher sai start  */}
            <ShadePurple className={'-right-20 top-20 bg-gradient-to-r w-72 h-72 opacity-20'} />

            <ShadePurple className={'-left-24 bottom-20 bg-gradient-to-r w-72 h-72 opacity-20'} />

            {/* shading circle yaha sai khatam bus ok  */}
            {/* Home text  */}
            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-primaryDark
                to-transparent' />


            <div className='col-span-1  justify-center text-left  flex flex-col  gap-y-6 sm:px-16 px-4 min-h-[24rem]'>

                <h1 data-aos="fade-right" className=' font-kaushans font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] text-headingDark '>
                    Custom 3D VTuber Models
                </h1>
                <p data-aos="fade-right" className='font-merryWeater lg:text-lg text-sm '>

                    Step into the third dimension. These models are crafted to move with you, feel like you, and connect deeper with your audience — in every blink, filt, and smile.

                </p>

                <ul>
                    <li>
                        Realistic Anime 3D Style
                    </li>
                    <li>
                        Full Body Rig & Face Tracking Support
                    </li>
                    <li>
                        Lore-Accurate Styling
                    </li>
                    <li>

                        * Ready for VSeeFace / VRoid / Animaze
                    </li>
                </ul>

                <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg pt-6 z-20'>
                    <button onClick={() => setIsFormOpen(true)} className=' px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md hover:-translate-y-2'>Get My 3D Model Started</button>

                </div>


            </div>


            <div data-aos="fade-top" className='col-span-1 3xl:h-[26rem] h-[30rem]   ' style={{ backgroundImage: `url("https://res.cloudinary.com/dqflexfdy/image/upload/v1754813076/sec2_model3d_ovibre.png")`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />

        </div>

    )
}

export default Custom3D
