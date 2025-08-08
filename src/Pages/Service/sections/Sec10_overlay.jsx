

import React from 'react'
import image from '../../../Assets/Images/services/sec10_overlay.jpg'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import ShadePurple from '../../../Common/ShadePurple'


const Sec10_overlay = () => {
    return (
        <div className='w-full  z-30 grid lg:grid-cols-2 grid-cols-1 gap-10  min-h-screen  text-textDark bg-primaryDark relative py-20 sm:p-16 p-4'>
            <AOSInitializer />
            {/* shading circle hai na idher sai start  */}
            <ShadePurple className={'-right-20 top-20 bg-gradient-to-r w-72 h-72'} />

            <ShadePurple className={'-left-24 bottom-20 bg-gradient-to-r w-72 h-72'} />

            {/* shading circle yaha sai khatam bus ok  */}
            {/* Home text  */}
            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-secondaryDark
                to-transparent' />

            <div data-aos="fade-top" className='2xl:w-[700px] md:w-[600px] sm:w-[500px]  h-full min-h-[26rem] ' style={{ backgroundImage: `url("${image}")`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
            <div className='col-span-1  justify-center text-left  flex flex-col  gap-y-6 sm:p-16 p-4 min-h-[24rem]'>

                <h1 data-aos="fade-right" className=' font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] text-headingDark '>
                    Custom Overlay Packs

                </h1>
                <p data-aos="fade-right" className='font-merryWeater lg:text-lg text-sm '>
                    From alerts to borders every piece of your stream layout should match your story. Our overlay packs are custom-built to fit your VTuber world.
                </p>

                <ul>
                    <li>
                        Fully Custom Facecam, Alerts, Labels
                    </li>
                    <li>
                        Twitch + Kick Optimized

                    </li>
                    <li>
                        Themed to Match Your VTuber Model


                    </li>
                    <li>
                        Multiple Layout Variants (Just Chatting / Gameplay)
 
                    </li>
                </ul>

                <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg pt-6 z-20'>
                    <button className=' px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md hover:-translate-y-2'>Build My Stream Overlay</button>

                </div>


            </div>




        </div>

    )
}

export default Sec10_overlay
