import React, { useContext, useState } from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import { ContextAPI } from '../../../GlobalProvider/ContextAPI'

const PFP = () => {
    const { showImageViewer, setShowImageViewer } = useContext(ContextAPI);
    const [isActive, setIsActive] = useState(null)

    const [showModal, setShowModal] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleActive = (onMouse) => {
        setIsActive(onMouse)
    }


    const speaker = [
        { callit: "Starry-Eyed Blossom", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754806821/1_wxqico.png' },
        { callit: "Neon Purrfect ", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754806824/2_qjsmca.jpg' },

        { callit: "Moonlit Hex", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754806824/2_qjsmca.jpg' },
        { callit: "Neon Diva pfp", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754806766/4_orbchh.jpg' },
        { callit: "Ghost Spark", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754806767/5_z5qjyd.jpg' },
        { callit: "Void Enchanter ", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754806771/6_zjokrs.jpg' },
        { callit: "Silver Edge", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754806802/7_yfqaku.jpg' },
        { callit: "Aurion style", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754806832/8_kiml6s.png' },
        { callit: "Scarlet Bunny style", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754806809/9_wxl2bx.jpg' },

        { callit: "Violet Victory style", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754806811/10_zr4iir.jpg' },
        { callit: "Horned Mischief style", icon: 'https://res.cloudinary.com/dqflexfdy/image/upload/v1754806817/11_ykoy8r.jpg' },
    ]

    const handleShowImage = (index) => {
        setCurrentImageIndex(index);
        setShowModal(speaker[index].icon);
        setShowImageViewer(true);
    }

    const [showAll, setShowAll] = useState(false);
    const handleShowAll = () => {
        setShowAll(!showAll)
    }
    // Slice data if not showing all
    const visibleWork = showAll ? speaker : speaker.slice(0, 6);

    return (
        <section className='w-full bg-primaryDark text-headingDark sm:py-10 py-20  px-4 sm:px-12 xl:px-64  2xl:px-80  xl:pt-40 flex flex-col  items-center relative min-h-screen gap-y-10'>
            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-secondaryDark
                to-transparent' />

            <AOSInitializer />
            <h1 data-aos="flip-up" className='   lg:text-[3.5rem] sm:text-5xl text-3xl leading-[1.1] w-full  font-bold text-center'>
                Custom PFP Designs

            </h1>
            <p data-aos="fade-up" className='lg:text-xl text-lg text-center '>
                Stand out in every stream Your face, your vibe, your story
            </p>

            <button className='  px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md hover:-translate-y-2'>Request Your Own</button>


            <div className='w-full grid grid-cols-2 lg:grid-cols-3  xl:gap-8 lg:gap-6 gap-4 mt-6 '>
                {visibleWork.map((speaker, idx) => (
                    <div data-aos="zoom-in" key={idx} onMouseEnter={() => handleActive(idx)} onMouseLeave={() => handleActive(null)} className='col-span-1 cursor-pointer bg-purple-950 bg-opacity-10 backdrop-blur-sm overflow-hidden row-span-1 rounded-xl  flex flex-col   items-center  transition-all gap-6 '
                        style={{ boxShadow: isActive == idx ? '0px 8px 15px 3px rgba(250, 250, 250, 0.1)' : '0px 1px 3px 2px #2C2839', transition: 'all 0.3s ease-in-out' }}>
                        {/* <img onClick={() => handleShowImage(idx)} src={speaker.icon} alt="" className='w-full md:min-h-80' /> */}
                        <div onClick={() => handleShowImage(idx)} className="w-full  min-h-64 relative bg-gradient-to-t from-purpleText/30 to-purpleText">
                            <div className='w-full h-full ' style={{ backgroundImage: `url(${speaker.icon})`, backgroundSize: 'cover', backgroundPosition: 'top' }}></div>

                        </div>

                        <div className='flex flex-col lg:text-lg text-sm gap-y-2 '>
                            <h1 className='flex flex-col lg:text-lg text-sm gap-y-2 p-4 text-center'>{speaker.callit}</h1>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full flex justify-center mt-8 z-20">
                <button
                    onClick={() => handleShowAll()}
                    className=" px-8 py-2 text-headingDark font-bold cursor-pointer transition-all duration-300 border-2 border-textDark bg-buttonPrimary text-center rounded-md hover:-translate-y-2"
                >
                    {showAll ? 'View Less' : 'View More'}
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

export default PFP
