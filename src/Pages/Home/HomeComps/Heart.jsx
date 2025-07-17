import React from 'react'
import whyYmmearc from '../../../Assets/Images/HomeImages/HeroImg.png'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'


const Heart = () => {
    return (
        <div className='w-full  z-30 grid lg:grid-cols-2 grid-cols-1 gap-10  bg-white/10  text-[#DAD4F7] bg-gradient-to-br from-[#1E1B2E] to-[#292440] relative pt-10'>
            <AOSInitializer />
            {/* Home text  */}
            <div className='col-span-1  justify-center text-left  flex flex-col  gap-y-6 sm:p-16 p-4 min-h-[24rem]'>

                <h1 data-aos="fade-right" className=' font-[600]  lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1]  '>
                    The Heart Behind Every Model
                </h1>
                <p data-aos="fade-right" className='font-merryWeater lg:text-lg text-sm '>At YummeArc, every model begins with your story your lore, your vibe, your soul. We believe your VTuber avatar shouldn’t just look good… it should feel like a reflection of you. Not just a character. A legacy.

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

                <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg pt-6 '>
                    <button data-aos="fade-up" data-aos-delay="200" className=' px-8 py-2  font-semibold cursor-pointer transition-all duration-300 text-textColor border-2 bg-purpleText text-center rounded-md '>Commission</button>
                    <button data-aos="fade-up" data-aos-delay="200" className=' px-8 py-2 text-white font-semibold cursor-pointer transition-all duration-300  bg-blushPink text-center rounded-md border-[1px] border-white'> View Portfolio</button>
                </div>


            </div>

            <div data-aos="fade-top" className='col-span-1 h-full min-h-[26rem]  ' style={{ backgroundImage: `url("${whyYmmearc}")`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />


        </div>

    )
}

export default Heart
