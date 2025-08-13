import React, { useContext, useState } from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import img7 from '../../../Assets/Images/portfolio/2d & 3D Models/F7.png'
import img10 from '../../../Assets/Images/portfolio/2d & 3D Models/F10.png'
import img12 from '../../../Assets/Images/portfolio/2d & 3D Models/F12.png'







import { ContextAPI } from '../../../GlobalProvider/ContextAPI'

const Speak = () => {
    const {setIsFormOpen} = useContext(ContextAPI)
    const [showImageViewer, setShowImageViewer] = useState()
    const [isActive, setIsActive] = useState(null)

    const [showModal, setShowModal] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleActive = (onMouse) => {
        setIsActive(onMouse)
    }


    const speaker = [
        { callit: "Infernia 2D Chibi Model", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754745969/F1_zdxgvb.png' },
        { callit: "Aurelius Guard 2D Model", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754746124/F2_o3gcmr.png' },

        { callit: "Neon Lyra 2D Model", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754746129/F3_ktyyqd.png' },
        { callit: "Frostbyte 3D Model", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754746058/F4_lzs9av.png' },
        { callit: "Shadowtail 3D Model", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754746058/F5_tokal0.png' },
        { callit: "Azure Ranger 3D Model", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754746060/F6_u7xrr0.png' },
        { callit: "Infernal Wraith 2D Model", icon: img7 },
        { callit: "Obsidian Shade 2D Model", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754746149/F8_bfbsyj.png' },
        { callit: "Silverblade Ronin 2D Model", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754746205/F9_jpss1z.png' },

        { callit: "Crimson Trickster 2D Model", icon: img10 },
        { callit: "Aetherfire Sentinel 3D Model", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754746224/F11_mmugmx.png' },
        { callit: "Pixel Purrfect 2D Model", icon: img12 },


    ]

    const handleShowImage = (index) => {
        setCurrentImageIndex(index);
        setShowModal(speaker[index].icon);
        setShowImageViewer(true);
    }

    const [showAll, setShowAll] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleShowAll = () => {
        setLoading(true); // loader start
        setTimeout(() => {
            setShowAll(!showAll);
            setLoading(false); // loader stop
        }, 1000); // 1 sec delay simulate (API call ka time)
    };

    // Slice data if not showing all
    const visibleWork = showAll ? speaker : speaker.slice(0, 6);

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

            <button onClick={() => setIsFormOpen(true)} className=' my-6 px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md sm:hover:-translate-y-2'>Request Your Own</button>


            <div className='w-full grid grid-cols-2 lg:grid-cols-3  xl:gap-8 lg:gap-6 gap-4 mt-6 '>
                {visibleWork.map((speaker, idx) => (
                    <div data-aos="zoom-in" key={idx} onMouseEnter={() => handleActive(idx)} onMouseLeave={() => handleActive(null)} className='col-span-1 cursor-pointer bg-purple-950 bg-opacity-10 backdrop-blur-sm overflow-hidden row-span-1 rounded-xl  flex flex-col   items-center  transition-all gap-6 '
                        style={{ boxShadow: isActive == idx ? '0px 8px 15px 3px rgba(250, 250, 250, 0.1)' : '0px 1px 3px 2px #2C2839', transition: 'all 0.3s ease-in-out' }}>
                        {/* <img onClick={() => handleShowImage(idx)} src={speaker.icon} alt="" className='w-full md:min-h-80' /> */}
                        <div onClick={() => handleShowImage(idx)} className="w-full  min-h-64 relative bg-gradient-to-t from-purpleText/30 to-purpleText">
                            <div className='w-full h-full ' style={{ backgroundImage: `url(${speaker.icon})`, backgroundSize: 'cover', backgroundPosition: 'top' }}></div>
                        </div>

                        <h1 className=' lg:text-lg text-sm  sm:p-4 p-2 text-center'>{speaker.callit}</h1>
                    </div>
                ))}
            </div>

            <div className="w-full flex justify-center mt-8 z-20">
                <button
                    onClick={handleShowAll}
                    disabled={loading} // disable while loading
                    className={`px-8 py-2 font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md  
            ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {loading ? (
                        <span className="flex items-center gap-2">
                            <svg
                                className="animate-spin h-5 w-5 text-headingDark"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                ></path>
                            </svg>
                            Loading...
                        </span>
                    ) : (
                        showAll ? 'View Less' : 'View More'
                    )}
                </button>
            </div>

            {showImageViewer && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                    {/* <span onClick={() => setShowImageViewer(false)} className='top-4 right-4 cursor-pointer text-3xl absolute text-white'><RxCross1/></span> */}
                    <button
                        onClick={() => {
                            const newIndex =
                                (currentImageIndex - 1 + speaker.length) %
                                speaker.length;
                            setCurrentImageIndex(newIndex);
                            setShowModal(speaker[newIndex].icon);
                        }}
                        className="px-4 left-4 top-1/2 text-white text-4xl font-bold z-50"
                    >
                        ‹
                    </button>

                    <div onClick={() => setShowImageViewer(false)} className='w-full h-[100vh] flex justify-center items-center '>
                        <img
                            src={showModal}
                            alt="viewer"
                            className="sm:max-w-full max-w-[80vw] max-h-[90vh] object-contain"
                        />
                    </div>

                    <button
                        onClick={() => {
                            const newIndex = (currentImageIndex + 1) % speaker.length;
                            setCurrentImageIndex(newIndex);
                            setShowModal(speaker[newIndex].icon);
                        }}
                        className="px-4 right-4 top-1/2 text-white text-4xl font-bold z-50"
                    >
                        ›
                    </button>
                </div>
            )}
        </section>
    )
}

export default Speak
