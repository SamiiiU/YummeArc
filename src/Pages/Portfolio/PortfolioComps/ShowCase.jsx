import React, { useState } from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import img1 from '../../../Assets/Images/portfolio/C1.png'
import img2 from '../../../Assets/Images/portfolio/C2.png'
import img3 from '../../../Assets/Images/portfolio/C3.png'
import img4 from '../../../Assets/Images/portfolio/C4.png'

const ShowCase = () => {
    const [isActive, setIsActive] = useState(null)

    const handleActive = (onMouse) => {
        setIsActive(onMouse)
    }

    const speaker = [
        { callit: "Custom Live2D VTuber Model", desc : "Captured my vision perfy!",  icon: img1 },
        { callit: "Adorable Chibi Panels",   desc : "Client loved these. cute panels!",  icon: img2 },

        { callit: "Detailed Stream Overlay",  desc : "500+ likes on social media",  icon: img3 },
        { callit: "Custom Outro Animation",  desc : "The animation was amazing!",  icon: img4 },
   

    ]
    return (
        <section className='w-full bg-primaryDark text-headingDark pb-10  px-4 sm:px-12 xl:px-64  2xl:px-80  xl:pt-40 flex flex-col  items-center relative min-h-screen gap-y-10'>
            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-secondaryDark
                to-transparent' />

            <AOSInitializer />
            <h1 data-aos="flip-up" className='   lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] w-full  font-bold text-center'>
                Spotlight Creations

            </h1>
            <p data-aos="fade-up" className='lg:text-xl text-lg text-center '>
                Where vision meets mastery — here are the designs that made hearts skip a beat.
            </p>

            <button className='  px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md hover:-translate-y-2'>Request Your Own</button>


            <div className='w-full grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 xl:gap-8 lg:gap-6 gap-4 mt-16 '>
                {speaker.map((speaker, idx) => (
                    <div data-aos="zoom-in" key={idx} onMouseEnter={() => handleActive(idx)} onMouseLeave={() => handleActive(null)} className='col-span-1 cursor-pointer bg-purple-950 bg-opacity-10 backdrop-blur-sm  row-span-1 rounded-xl  flex flex-col   items-center gap-y-6  transition-all gap-6 overflow-x-hidden'
                        style={{ boxShadow: isActive == idx ? '0px 8px 15px 3px rgba(250, 250, 250, 0.1)' : '0px 1px 3px 2px #2C2839', transition: 'all 0.3s ease-in-out' }}>
                        <img src={speaker.icon} alt="" className='w-full h-52' />
                        <div className='flex flex-col lg:text-lg text-sm gap-y-2 px-3 pb-3 text-center'>
                            <h1 className='text-lg font-semibold font-merryWeater text-headingDark'>{speaker.callit}</h1>
                            <p className='text-sm'>{speaker.desc}</p>
                            <button className='rounded-full text-sm bg-blackText text-headingDark font-semibold px-3 py-2 hover:bg-slate-900'>View Full Project</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ShowCase
