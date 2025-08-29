import React from 'react'
import whyYmmearc from '../../../Assets/Images/HomeImages/heartChar.png'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import ShadePurple from '../../../Common/ShadePurple'
import { Link } from 'react-router-dom'


const Heart = () => {
    return (
        <div className='w-full  z-30 grid lg:grid-cols-2 grid-cols-1 gap-10    text-textDark bg-secondaryDark relative pt-10  px-4  sm:px-20 xl:px-28 3xl:px-80'>
            <AOSInitializer />
            {/* shading circle hai na idher sai start  */}
            <ShadePurple className={'-right-20 top-20 bg-gradient-to-r w-72 h-72'} />

            <ShadePurple className={'-left-24 bottom-20 bg-gradient-to-r w-72 h-72'} />

            {/* shading circle yaha sai khatam bus ok  */}
            {/* Home text  */}
            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-primaryDark
                to-transparent' />
            <div className='col-span-1  justify-center text-left  flex flex-col  gap-y-6 sm:p-16 p-4 min-h-[24rem]'>

                <h1 data-aos="fade-right" className='w-full text-left z-20  font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1]  text-headingDark font-kaushans'>
                    The Heart Behind Every Model
                </h1>
                <p data-aos="fade-right" className='font-merryWeater lg:text-lg text-sm '>At YumeArc, every model begins with your story your lore, your vibe, your soul. We believe your VTuber avatar shouldn’t just look good… it should feel like a reflection of you. Not just a character. A legacy.

                </p>

                <p data-aos="fade-right" className='font-merryWeater lg:text-lg text-sm '>
                    Before we draw, we listen. <br />
                    Before we color, we understand. <br />
                    We take your world, your personality, and your goals
                    and we build something that truly feels like you.
                </p>

                <p data-aos="fade-right" className='font-merryWeater lg:text-lg text-sm '>
                    Because streaming isn’t just visual.<br />
                    It’s emotional. <br />
                    It’s storytelling in motion.

                </p>

                <p data-aos="fade-right" className='font-merryWeater lg:text-lg text-sm '>
                    And your model? <br />
                    It should be more than pretty
                    It should be you, brought to life.

                </p>

                <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg pt-6 z-20'>
                    <Link to={"/comission"} className=' px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md hover:-translate-y-2'>Commission</Link>

                    <Link to={"/portfolio"} className=' px-8 py-2 text-white font-semibold cursor-pointer transition-all duration-300  bg-blushPink text-center rounded-md border-[1px] border-white'> View Portfolio</Link>
                </div>


            </div>

            <div data-aos="fade-top" className='col-span-1 h-full min-h-[26rem]  ' style={{ backgroundImage: `url("${whyYmmearc}")`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />


        </div>

    )
}

export default Heart
