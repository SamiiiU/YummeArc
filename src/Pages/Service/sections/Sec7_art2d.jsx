import React, { useContext } from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import ShadePurple from '../../../Common/ShadePurple'
import { ContextAPI } from '../../../GlobalProvider/ContextAPI'


const Sec7_art2d = () => {
        const {setIsFormOpen} = useContext(ContextAPI)
    
    return (
        <div className='w-full px-4  sm:px-20 xl:px-28 3xl:px-80 z-30 grid lg:grid-cols-2 grid-cols-1 sm:gap-10    text-textDark bg-secondaryDark relative py-10 justify-center items-center'>
            <AOSInitializer />
            {/* shading circle hai na idher sai start  */}
            <ShadePurple className={'-right-20 top-20 bg-gradient-to-r w-72 h-72 opacity-20'} />

            <ShadePurple className={'-left-24 bottom-20 bg-gradient-to-r w-72 h-72 opacity-20'} />

            {/* shading circle yaha sai khatam bus ok  */}
            {/* Home text  */}
            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-primaryDark
                to-transparent' />


            <div className='col-span-1  justify-center text-left  flex flex-col  gap-y-6 sm:px-16 px-4 min-h-[24rem]'>

                <h1 data-aos="fade-right" className='  font-kaushans font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] text-headingDark '>
                    2D Art Scenes (Starting / Ending / BRB)

                </h1>
                <p data-aos="fade-right" className='font-merryWeater lg:text-lg text-sm '>

                    Even when you're away, your stream should still feel like your world. We create lore-rich 2D scenes for Start, End, and BRB that keep your vibe alive.


                </p>

                <ul>
                    <li>
                        Custom Background Art

                    </li>
                    <li>
                         Your VTuber Model Can Be Included
                    </li>
                    <li>
                        Choose Scene Text (Starting, Ending, BRB)

                    </li>
                    <li>
                        Perfect for Twitch + Kick Layouts
                    </li>
                </ul>

                <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg pt-6 z-20'>
                    <button onClick={() => setIsFormOpen(true)} className=' px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md sm:hover:-translate-y-2'>Design My Stream Scenes</button> 

                </div>


            </div>


            <div data-aos="fade-top" className='2xl:w-[700px] md:w-[600px] sm:w-[500px] w-[350px] 3xl:h-[26rem] h-[30rem]  mx-auto' style={{ backgroundImage: `url("https://res.cloudinary.com/dqflexfdy/image/upload/v1754813034/sec7_artseen_scauho.jpg")`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />

        </div>

    )
}

export default Sec7_art2d
