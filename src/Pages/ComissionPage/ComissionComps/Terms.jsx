import React, { useState } from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import { FaBox, FaBrain, FaHeart, FaPen, FaStar } from 'react-icons/fa'
import { IoIosChatbubbles, IoMdMail } from 'react-icons/io'
import { TbChecklist } from 'react-icons/tb'
import { BsStars } from 'react-icons/bs'
import { FaQuestion } from 'react-icons/fa6'

const Terms = () => {
    const [isActive, setIsActive] = useState(null)

    const handleActive = (onMouse) => {
        setIsActive(onMouse)
    }
    const process = [
        { heaiding: 'Usage Rights', para: 'All commissions are for personal use only unless commercial rights are discussed and agreed upon. If you plan to use the art for merch, ads, or revenue-generating content, let us know first.' },

        { heaiding: 'Revisions', para: 'We offer unlimited revisions during the sketch phase. Once we move to final rendering or rigging, major changes may not be possible or could include an extra fee — we’ll always inform you first.' },

        { heaiding: 'Refunds', para: 'We only accept refunds before work begins. Once work starts, no refunds will be issued. If there’s an issue, we’re happy to discuss adjustments instead.', },

        { heaiding: 'Communication', para: 'Once the 50% upfront is confirmed, your custom art begins its journey.' },

        { heaiding: 'Communication', para: 'All updates and progress are shared via Twitter or Discord. Please stay responsive during the process to avoid delays.' },

        { heaiding: 'Rigging Options', para: 'We offer rigging for both 2D and 3D models. If you\'d like this service included, mention it while commissioning.' },

        { heaiding: 'Payment Terms', para: '50% upfront – 50% on final delivery. We accept multiple payment methods (PayPal, Wise, local banks, etc.).' },

    ]
    return (
        <div className=' bg-secondaryDark flex flex-col items-center px-4 sm:px-28  2xl:px-80 py-20  min-h-screen text-textDark  relative '>
            <AOSInitializer />
            {/* shading circle hai na idher sai start  */}


            {/* shading circle yaha sai khatam bus ok  */}
            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-primaryDark
                to-transparent ' />

            <h1 className='font-kaushans text-headingDark text-5xl'>Comission Open</h1>
            <p data-aos="fade-up" className='text-center lg:text-lg text-sm w-full my-6  '>Terms & Important Notes of your Commission Page, written in your YummeArc voice and matching your theme
            </p>

            <div className='w-full grid  lg:grid-cols-2 grid-cols-1 gap-8 mt-6'>
                {process.map((process, idx) => (
                    <div data-aos="fade-up" key={idx} onMouseEnter={() => handleActive(idx)} onMouseLeave={() => handleActive(null)}
                        style={{ boxShadow: isActive == idx ? '0px 8px 15px 3px rgba(0, 0, 0, 0.1)' : '0px 1px 3px 2px rgba(0, 0, 0, 0.1)' }} className='col-span-1 row-span-1 p-4 flex sm:flex-row flex-col rounded-md transition-all cursor-pointer sm:gap-y-2 gap-y-6 text-headingDark sm:items-center'>
                        <span className=' w-fit  text-5xl bg-buttonPrimary/20 rounded-full p-4 '>
                            <FaQuestion/>
                        </span>
                        <div className='sm:px-5 space-y-3'>
                            <h1 className='text-xl font-bold'>{process.heaiding}</h1>
                            <p className='font-merryWeater'>{process.para}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h1 className='w-full text-center text-xl font-semibold italic z-20 sm:px-20  mt-10'>🚫 Note: We do not work with any third-party artists or resellers. If someone claims to represent us outside our official platforms, please report it.</h1>

        </div>
    )
}

export default Terms
