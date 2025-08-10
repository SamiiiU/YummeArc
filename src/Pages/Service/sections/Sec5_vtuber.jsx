import React from 'react'
import custom_3d from '../../../Assets/Images/services/sec6_animation.png'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import ShadePurple from '../../../Common/ShadePurple'


const Sec5_vtuber = () => {
    return (
        <div className='w-full  z-30 grid lg:grid-cols-2 grid-cols-1 gap-10  min-h-screen  text-textDark bg-secondaryDark relative py-10'>
            <AOSInitializer />
            {/* shading circle hai na idher sai start  */}
            <ShadePurple className={'-right-20 top-20 bg-gradient-to-r w-72 h-72'} />

            <ShadePurple className={'-left-24 bottom-20 bg-gradient-to-r w-72 h-72'} />

            {/* shading circle yaha sai khatam bus ok  */}
            {/* Home text  */}
            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-primaryDark
                to-transparent' />


            <div className='col-span-1  justify-center text-left  flex flex-col  gap-y-6 sm:p-16 p-4 min-h-[24rem]'>

                <h1 data-aos="fade-right" className=' font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] text-headingDark '>
                    Custom VTuber Panels

                </h1>
                <p data-aos="fade-right" className='font-merryWeater lg:text-lg text-sm '>

                    Not your average panels we turn your VTuber model into panel art that feels like part of your stream’s universe

                </p>

                <ul>
                    <li>
                        Based on Your Model’s Outfit & Lore
                    </li>
                    <li>
                        Detailed Props & Styled Backgrounds

                    </li>
                    <li>
                        Custom Lettering & Colors
                    </li>
                    <li>

                        Perfect for Twitch / Kick / Discord Panels

                    </li>
                </ul>

                <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg pt-6 z-20'>
                    <button className=' px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md hover:-translate-y-2'>Order My Custom Panels</button>

                </div>


            </div>


            <div data-aos="fade-top" className='col-span-1 h-full min-h-[26rem]  ' style={{ backgroundImage: `url("${custom_3d}")`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />

        </div>

    )
}

export default Sec5_vtuber
