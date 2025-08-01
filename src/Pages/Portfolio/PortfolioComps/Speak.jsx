import React, { useState } from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import img1 from '../../../Assets/Images/portfolio/F1.png'
import img2 from '../../../Assets/Images/portfolio/F2.png'
import img3 from '../../../Assets/Images/portfolio/F3.png'
import img4 from '../../../Assets/Images/portfolio/F4.png'

const Speak = () => {
    const [isActive, setIsActive] = useState(null)

    const handleActive = (onMouse) => {
        setIsActive(onMouse)
    }

    const speaker = [
        { callit: "Kuro",  icon: img1 },
        { callit: "Kuro",  icon: img2 },

        { callit: "Kuro",  icon: img3 },
        { callit: "Kuro",  icon: img4 },
        { callit: "Kuro",  icon: img3 },
        { callit: "Kuro",  icon: img4 },
        { callit: "Kuro",  icon: img1 },
        { callit: "Kuro",  icon: img2 },
        { callit: "Kuro",  icon: img2 },
        { callit: "Kuro",  icon: img4 },
        { callit: "Kuro",  icon: img3 },
        { callit: "Kuro",  icon: img1 },

    ]
    return (
        <section className='w-full bg-primaryDark text-headingDark sm:py-10 py-20  px-4 sm:px-12 xl:px-64  2xl:px-80  xl:pt-40 flex flex-col  items-center relative min-h-screen gap-y-10'>
            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-secondaryDark
                to-transparent' />

            <AOSInitializer />
            <h1 data-aos="flip-up" className='   lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] w-full  font-bold text-center'>
                Our Work Speaks First
            </h1>
            <p data-aos="fade-up" className='lg:text-xl text-lg text-center '>
                A Showcase of Custom VTuber Worlds, Crafted with Emotion
                From soft & charming to bold & wild, each model we build is a unique
                reflection of its creator. We let the art do most of the talking.
            </p>

            <button className='  px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md hover:-translate-y-2'>Request Your Own</button>


            <div className='w-full grid grid-cols-2 lg:grid-cols-4  xl:gap-8 lg:gap-6 gap-4 mt-6 '>
                {speaker.map((speaker, idx) => (
                    <div data-aos="zoom-in" key={idx} onMouseEnter={() => handleActive(idx)} onMouseLeave={() => handleActive(null)} className='col-span-1 cursor-pointer bg-purple-950 bg-opacity-10 backdrop-blur-sm overflow-hidden row-span-1 rounded-xl  flex flex-col   items-center  transition-all gap-6'
                        style={{ boxShadow: isActive == idx ? '0px 8px 15px 3px rgba(250, 250, 250, 0.1)' : '0px 1px 3px 2px #2C2839', transition: 'all 0.3s ease-in-out' }}>
                        <img src={speaker.icon} alt="" className='w-full md:h-52' />
                        <div className='flex flex-col lg:text-lg text-sm gap-y-2 '>
                            <h1 className='text-xl font-semibold font-merryWeater text-headingDark'>{speaker.callit}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Speak
