import React, { useState } from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import { FaBox, FaBrain, FaHeart, FaPen, FaStar } from 'react-icons/fa'
import { IoIosChatbubbles, IoMdMail } from 'react-icons/io'
import { TbChecklist } from 'react-icons/tb'
import { BsStars } from 'react-icons/bs'

const OurProcess = () => {
    const [isActive, setIsActive] = useState(null)

    const handleActive = (onMouse) => {
        setIsActive(onMouse)
    }
    const process = [
        { heaiding: 'Reach Out', para: 'DM us on Twitter or Discord or use the commission form below.', icon: < IoMdMail/> },
        { heaiding: 'Share Your Idea', para: 'Tell us your story, references, and what you’re dreaming of.', icon: <IoIosChatbubbles /> },
        { heaiding: 'We Confirm Details', para: 'You get a quote, deadline, and everything you need — no surprises!', icon: <TbChecklist /> },
        { heaiding: 'Art Begins ', para: 'Once the 50% upfront is confirmed, your custom art begins its journey.', icon: <BsStars /> },

    ]
    return (
        <div className=' bg-primaryDark flex flex-col items-center px-4 sm:px-28  2xl:px-80 py-10  min-h-screen text-textDark  relative'>
            <AOSInitializer />
            {/* shading circle hai na idher sai start  */}


            {/* shading circle yaha sai khatam bus ok  */}
            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-secondaryDark
                to-transparent ' />
            <h1 className='font-kaushans text-headingDark text-5xl'>How to Order a Custom Piece 💫</h1>
            <p data-aos="fade-up" className='text-center lg:text-lg text-sm w-full my-6  '>Whether it's a Live2D model, emotes, or full stream setup — here’s how the magic begins:
            </p>

            <div className='w-full grid  md:grid-cols-2 grid-cols-1 gap-8 mt-6'>
                {process.map((process, idx) => (
                    <div data-aos="fade-up" key={idx} onMouseEnter={() => handleActive(idx)} onMouseLeave={() => handleActive(null)}
                        style={{ boxShadow: isActive == idx ? '0px 8px 15px 3px rgba(0, 0, 0, 0.1)' : '0px 1px 3px 2px rgba(0, 0, 0, 0.1)' }} className='col-span-1 row-span-1 p-4 flex rounded-md transition-all cursor-pointer  text-headingDark items-center'>
                        <span className=' h-full  text-5xl bg-buttonPrimary/20 rounded-full p-4'>
                            {process.icon}
                        </span>
                        <div className='px-5'>
                            <h1 className='text-xl font-bold'>{process.heaiding}</h1>
                            <p className='font-merryWeater'>{process.para}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default OurProcess
