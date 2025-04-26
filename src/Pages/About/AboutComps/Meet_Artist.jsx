import React from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'

const Meet_Artist = () => {
    return (
        <div className='w-full  px-4 sm:px-12  2xl:px-80 py-20 bg-white'>
            <AOSInitializer/>

            <div className='w-full  grid md:grid-cols-2 grid-cols-1 gap-10'>
                <div className='space-y-6 col-span-1'>
                    <h1 data-aos="fade-right" className='text-4xl font-bold'>Meet the Artist - <i>Emma Smith</i></h1>
                    <p data-aos="fade-right" >Hi! I'm Emma, a lifelong anime fan and full-time VTuber model artist. I started YumeArc because I saw too many models lacking soul-just art without story.
                        <br /> <br />
                        Now, I help creators around the world bring their anime-inspired identities to life. Whether it's a shy healer, a space idol, or a wandering swordsman-I'm here to draw your dream.
                    </p>
                </div>
                <div  className='col-span-1 lg:px-20 sm:px-10 relative'>
                    <img
                        src="https://www.josephsmithpapers.org/bc-jsp/content/jsp/images/content/library/images/per86---D1-page-163---088-088-emma-smith-full-2.jpg"
                        style={{
                            width: '100%',
                            height: '400px',
                            objectFit: 'cover',
                            objectPosition: 'center -30px' // Push the image up
                        }}
                        alt="Emma Smith"
                    />
                </div>
            </div>

            <h1 data-aos="zoom-in" className='w-full text-center mt-8 font-bold md:text-4xl text-2xl'>
                "Design isn't just about looks. It's about why your character exists."
            </h1>

        </div>
    )
}

export default Meet_Artist
