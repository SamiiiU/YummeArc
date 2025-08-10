import React from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import ShadePurple from '../../../Common/ShadePurple'


const Sec11_intro = () => {
    return (
        <div className='w-full  z-30 grid lg:grid-cols-2 grid-cols-1 gap-10  min-h-screen  text-textDark bg-secondaryDark relative py-10'>
            <AOSInitializer />
            {/* shading circle hai na idher sai start  */}
            <ShadePurple className={'-right-20 top-20 bg-gradient-to-r w-72 h-72  opacity-35'} />

            <ShadePurple className={'-left-24 bottom-20 bg-gradient-to-r w-72 h-72  opacity-35'} />

            {/* shading circle yaha sai khatam bus ok  */}
            {/* Home text  */}
            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-primaryDark
                to-transparent' />


            <div className='col-span-1  justify-center text-left  flex flex-col  gap-y-6 sm:p-16 p-4 min-h-[24rem]'>

                <h1 data-aos="fade-right" className=' font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] text-headingDark '>
                    Custom Intro & Outro Animations

                </h1>
                <p data-aos="fade-right" className='font-merryWeater lg:text-lg text-sm '>

                    Your stream should open and close like a story. We design intro & outro animations that feel magical, dramatic, or just full of personality the way you want to be remembered.

                </p>

                <ul>
                    <li>
                        Fully Custom Animations (2D or Mixed)
                    </li>
                    <li>
                        Optional Sound Effects / Music Sync
                    </li>
                    <li>
                        Match VTuber Lore / Branding
                    </li>
                    <li>
                        Twitch, YouTube, Kick Compatible
                    </li>
                </ul>

                <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg pt-6 z-20'>
                    <button className=' px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md hover:-translate-y-2'>Start My Animation Project</button>

                </div>


            </div>


            <div
                data-aos="fade-top"
                className="2xl:w-[700px] md:w-[600px] sm:w-[500px] h-full min-h-[26rem]"
            >
                <video
                    src="https://res.cloudinary.com/dqflexfdy/video/upload/v1754819069/WhatsApp_Video_2025-08-08_at_19.16.47_badd7726_ryhbj8.mp4" // apna video URL yahan daal
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-contain"
                />
            </div>


        </div>

    )
}

export default Sec11_intro
