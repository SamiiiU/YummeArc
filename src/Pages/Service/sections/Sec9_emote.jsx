import React, { useContext } from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import ShadePurple from '../../../Common/ShadePurple'
import { ContextAPI } from '../../../GlobalProvider/ContextAPI'


const Sec9_emote = () => {
        const {setIsFormOpen} = useContext(ContextAPI)
    
    return (
        <div className='w-full px-4  sm:px-20 xl:px-28 3xl:px-80 z-30 grid lg:grid-cols-2 grid-cols-1 sm:gap-10  text-textDark bg-secondaryDark relative py-10'>
            <AOSInitializer />
            {/* shading circle hai na idher sai start  */}
            <ShadePurple className={'-right-20 top-20 bg-gradient-to-r w-72 h-72 opacity-20'} />

            <ShadePurple className={'-left-24 bottom-20 bg-gradient-to-r w-72 h-72 opacity-20'} />

            {/* shading circle yaha sai khatam bus ok  */}
            {/* Home text  */}
            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-primaryDark
                to-transparent' />


            <div className='col-span-1  justify-center text-left  flex flex-col  gap-y-6 sm:px-8 px-4 min-h-[24rem]'>

                <h1 data-aos="fade-right" className=' font-kaushans font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] text-headingDark '>
                    Custom Emotes & Badges
                </h1>
                <p data-aos="fade-right" className='font-merryWeater lg:text-lg text-sm '>

                    From spicy rages to sparkly hearts we create emotes that scream your vibe in just one glance. Each emote and badge is drawn from your world.

                </p>

                <ul>
                    <li>
                       Hand-Drawn in Your Style
                    </li>
                    <li>
                        Based on Your Model & Personality

                    </li>
                    <li>
                      Sub Badges with Tiered Progression


                    </li>
                    <li>
                       Optimized for Twitch + Discord

                    </li>
                </ul>

                <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg pt-6 z-20'>
                    <button onClick={() => setIsFormOpen(true)} className=' px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md sm:hover:-translate-y-2'>Order My Emotes & Badges</button>

                </div>


            </div>


            <div data-aos="fade-top" className='2xl:w-[700px] md:w-[600px] sm:w-[500px] w-[350px]   3xl:h-[26rem] h-[30rem]  mx-auto' style={{ backgroundImage: `url("https://res.cloudinary.com/dqflexfdy/image/upload/v1754813042/sec9_emote_mkk04f.png")`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />

        </div>

    )
}

export default Sec9_emote
