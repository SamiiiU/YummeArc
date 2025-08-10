import React, { useState } from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import heroImg from '../../../Assets/Images/about/hero.png'
import { CiStar } from 'react-icons/ci'
import { FaBook, FaLeaf } from 'react-icons/fa'
import { WiStars } from 'react-icons/wi'
import img3 from '../../../Assets/Images/about/3.png'
import { BsDiscord, BsTwitch, BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const MeetArtist = () => {
    const meetArtist = [
        { callit: "Celestria Paisley",
              twitter : 'https://x.com/celestiapaisley?s=21',
              twitch : 'https://www.twitch.tv/celestialpaisley',
               discord: "Luoro",
        icon: img3 },


        { callit: "MIDNIGHT KENSHI",
              twitter : 'https://x.com/celestiapaisley?s=21',
              twitch : 'https://www.twitch.tv/celestialpaisley',
               discord: "Luoro",
        icon: img3 },

        { callit: "Celestria Paisley",
              twitter : 'https://x.com/celestiapaisley?s=21',
              twitch : 'https://www.twitch.tv/celestialpaisley',
               discord: "Luoro",
        icon: img3 },

        { callit: "Celestria Paisley",
              twitter : 'https://x.com/celestiapaisley?s=21',
              twitch : 'https://www.twitch.tv/celestialpaisley',
               discord: "Luoro",
        icon: img3 },

        { callit: "Celestria Paisley",
              twitter : 'https://x.com/celestiapaisley?s=21',
              twitch : 'https://www.twitch.tv/celestialpaisley',
               discord: "Luoro",
        icon: img3 },

        { callit: "Celestria Paisley",
              twitter : 'https://x.com/celestiapaisley?s=21',
              twitch : 'https://www.twitch.tv/celestialpaisley',
               discord: "Luoro",
        icon: img3 },

        { callit: "Celestria Paisley",
              twitter : 'https://x.com/celestiapaisley?s=21',
              twitch : 'https://www.twitch.tv/celestialpaisley',
               discord: "Luoro",
        icon: img3 },

        { callit: "Celestria Paisley",
              twitter : 'https://x.com/celestiapaisley?s=21',
              twitch : 'https://www.twitch.tv/celestialpaisley',
               discord: "Luoro",
        icon: img3 },

        { callit: "Celestria Paisley",
              twitter : 'https://x.com/celestiapaisley?s=21',
              twitch : 'https://www.twitch.tv/celestialpaisley',
               discord: "Luoro",
        icon: img3 },

        { callit: "Celestria Paisley",
              twitter : 'https://x.com/celestiapaisley?s=21',
              twitch : 'https://www.twitch.tv/celestialpaisley',
               discord: "Luoro",
        icon: img3 },

        { callit: "Celestria Paisley",
              twitter : 'https://x.com/celestiapaisley?s=21',
              twitch : 'https://www.twitch.tv/celestialpaisley',
               discord: "Luoro",
        icon: img3 },

        { callit: "Celestria Paisley",
              twitter : 'https://x.com/celestiapaisley?s=21',
              twitch : 'https://www.twitch.tv/celestialpaisley',
               discord: "Luoro",
        icon: img3 },

    ]

    const [isActive, setIsActive] = useState(null)

    const handleActive = (onMouse) => {
        setIsActive(onMouse)
    }

    const [isActiveMore, setIsActiveMore] = useState(null);
    const [showAll, setShowAll] = useState(false);
    const handleShowAll = () => {
        setShowAll(!showAll)
    }

    // Slice data if not showing all
    const visibleArtists = showAll ? meetArtist : meetArtist.slice(0, 6);

    
    return (
        <section className='w-full bg-secondaryDark text-headingDark pb-20  px-4 sm:px-12 xl:px-64  2xl:px-80  xl:pt-40 flex flex-col justify-center items-center relative min-h-screen'>
            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-primaryDark
                to-transparent' />
            <AOSInitializer />
            <h1 data-aos="flip-up" className='   lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] w-full text-center font-bold'>
                Anime-Loving Artists <br /> Lore-Fueled Creators.

            </h1>
            <div className='w-full grid sm:grid-cols-2 grid-cols-1 xl:gap-8 lg:gap-6 gap-4 mt-16 '>
                {visibleArtists.map((why, idx) => (
                    <div
                        data-aos="zoom-in"
                        key={idx}
                        onMouseEnter={() => setIsActiveMore(idx)}
                        onMouseLeave={() => setIsActiveMore(null)}
                        className='col-span-1  bg-purple-950 bg-opacity-10 backdrop-blur-sm row-span-1 rounded-xl flex items-center gap-y-6 px-8 py-6 transition-all gap-6'
                        style={{
                            boxShadow:
                                isActive === idx
                                    ? '0px 8px 15px 3px rgba(250, 250, 250, 0.1)'
                                    : '0px 1px 3px 2px #2C2839',
                            transition: 'all 0.3s ease-in-out',
                        }}
                    >
                        <img src={why.icon} alt="" className='w-20' />
                        <div className='flex flex-col lg:text-lg text-sm gap-y-2'>
                            <h1 className='text-xl font-semibold font-merryWeater text-headingDark'>
                                {why.callit}
                            </h1>

                            <span className='flex gap-x-4 items-center'>
                                <BsDiscord size="1.2em" /> {why.callit}
                            </span>

                            <Link target='__blank' to={why.twitch} className='flex gap-x-4 items-center'>
                                <BsTwitch size="1.2em" /> Twitch
                            </Link>

                            <Link target='__blank' to={why.twitter} className='flex gap-x-4 items-center'>
                                <BsTwitter size="1.2em" /> Twitter
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            
                <div className="w-full flex justify-center mt-8 z-20">
                    <button
                        onClick={() => handleShowAll()}
                        className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 cursor-pointer"
                    >
                        {showAll ? 'View Less' : 'View More'}
                    </button>
                </div>
            
            <div className='z-20 p-8 text-center space-y-3 rounded-lg bg-pink-950 bg-opacity-10 mt-10 border-[1px] border-headingDark'>
                <h1 className='text-xl '><span className=' font-bold '>Important Note : </span> These are the only official artists working under YummeArc.
                    We do not work with anyone outside this list. Always confirm using our official links before placing an order.</h1>
            </div>

        </section>
    )
}

export default MeetArtist
