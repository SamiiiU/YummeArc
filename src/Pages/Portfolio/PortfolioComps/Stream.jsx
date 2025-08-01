import React, { useState } from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import img1 from '../../../Assets/Images/portfolio/P1.png'
import img2 from '../../../Assets/Images/portfolio/P2.png'
import img3 from '../../../Assets/Images/portfolio/P3.png'

const Stream = () => {
    const [isActive, setIsActive] = useState(null)

    const handleActive = (onMouse) => {
        setIsActive(onMouse)
    }

    const stream = [
        { callit: "Chibi Panels", icon: img1 },
        { callit: "Custom Panels", icon: img2 },
        { callit: "Overlays", icon: img3 },







    ]
    return (
        <section className='w-full bg-secondaryDark text-headingDark  px-4 sm:px-12 xl:px-64  2xl:px-80  xl:pt-40 flex flex-col  items-center relative min-h-screen gap-y-10 sm:py-10 py-20'>
            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-primaryDark
                to-transparent' />

            <AOSInitializer />
            <h1 data-aos="flip-up" className='   lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] w-full  font-bold text-center'>
                Stream Panels & Custom Overlays
            </h1>
            <p data-aos="fade-up" className='lg:text-xl text-lg text-center '>
                Chibi-style panels, character-based layouts, and vibrant overlays crafted to match each VTuber’s vibe perfectly.
            </p>

            {/* <button className='  px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md hover:-translate-y-2'>Request Your Own</button> */}


            <div className='w-full grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 xl:gap-8 lg:gap-6 gap-4 mt-6 '>
                {stream.map((speaker, idx) => (
                    <div data-aos="zoom-in" key={idx} onMouseEnter={() => handleActive(idx)} onMouseLeave={() => handleActive(null)} className='col-span-1 cursor-pointer   backdrop-blur-sm  row-span-1 rounded-xl overflow-hidden flex flex-col   items-center gap-y-6  transition-all gap-3 pt-6'
                        style={{ boxShadow: isActive == idx ? '0px 0px 0px 3px rgba(250, 250, 250, 0.1)' : '0px 0px 3px 2px #2C2839', transition: 'all 0.3s ease-in-out' }}>
                            <h1 className='text-xl font-semibold font-merryWeater text-headingDark'>{speaker.callit}</h1>
                        <img src={speaker.icon} alt="" className='w-full sm:h-80' />

                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stream
