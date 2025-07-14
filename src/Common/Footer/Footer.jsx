import React from 'react'
import { MdCall, MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLocationDot, FaSnapchat, FaTwitch, FaTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className='w-full space-y-8 text-purpleText relative bg-blackText'>

            <div className='grid px-4 sm:px-12 py-20  2xl:px-80 lg:grid-cols-3 gap-20 w-full'>

                <div className='space-y-8 cols-span-1 '>
                    {/* Logo image started  */}
                    {/* <img className='w-[5rem]' src="https://upload.wikimedia.org/wikipedia/en/e/eb/JDC_Foundation_Logo.png" alt="Logo " /> */}
                    <h1 className='text-5xl font-bold font-kaushans'>YummeArc</h1>

                    {/* Logo image done  */}
                    <h1 className='font-bold text-xl text-white'> <i> "Where Your Story Becomes a Virtual Star ✨" </i></h1>

                    <div className='w-full flex gap-x-6 text-white'>
                        <a href="" target='_blank' className='hover:scale-125 transition-all' ><FaFacebook size={"2em"}/></a>
                        <a href="" target='_blank' className='hover:scale-125 transition-all' ><FaTwitter size={"2em"}/></a>
                        <a href="" target='_blank' className='hover:scale-125 transition-all' ><FaSnapchat size={"2em"}/></a>
                        <a href="" target='_blank' className='hover:scale-125 transition-all' ><FaInstagram size={"2em"}/></a>
                        <a href="" target='_blank' className='hover:scale-125 transition-all' ><FaTwitch size={"2em"}/></a>


                    </div>
                </div>

                <div className='space-y-6 cols-span-1 '>
                    <h1 className='text-xl font-bold'>Quick Links</h1>

                    <div className='flex flex-col gap-y-3 text-white'>
                        <Link to={"/"} className='text-lg font-semibold underline z-10 '>Home</Link>



                        <Link to={"/portfolio"} className='text-lg font-semibold underline z-10 '>Portfolio</Link>



                        <Link to={"/about"} className='text-lg font-semibold underline z-10 '>About</Link>



                        <Link to={"/comission"} className='text-lg font-semibold underline z-10 '>Comission</Link>
                    </div>

                </div>

                <div className='space-y-6 cols-span-1'>
                    <h1 className='text-xl font-bold'>Contact Us </h1>

                    <div className='flex flex-col gap-y-4 text-white'>
                        <div className='flex '>
                            <MdEmail size={"2em"} />
                            <p className='px-4 text-lg font-semibold underline'>jdcOfficial@bhikari.com</p>
                        </div>

                        <div className='flex '>
                        <FaLocationDot  size={"2em"} />
                            <p className='px-4 text-lg font-semibold underline'>S Palm AveSan Gabriel, CA 91776, USA</p>
                        </div>

                        <div className='flex '>
                            <MdCall size={"2em"} />
                            <p className='px-4 text-lg font-semibold underline'>+1 123 4567891</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className=' w-full  py-4 text-center bg-blackText text-white font-semibold text-xl'> 2025 YummeArc — Made with sparkles, stories & coffee ☕✨

</div>
        </div>
    )
}

export default Footer