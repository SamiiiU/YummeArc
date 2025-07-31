import React from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import Star from '../../../Common/Star'
import ShadePurple from '../../../Common/ShadePurple'
import heroImg from '../../../Assets/Images/comission/4.png'

const OrderFrom = () => {
    return (
        <div className='relative overflow-hidden'>


            <div className='w-full xl:h-[37rem] lg:h-[40rem] h-auto bg-primaryDark text-textDark   px-4 xl:px-28 sm:px-20  2xl:px-80   flex  min-h-screen'>





 

                <span className='w-full h-1/5 absolute bottom-0 z-20 right-0 bg-gradient-to-t from-secondaryDark
                to-transparent ' />
                <AOSInitializer duration={500} offset={20} />

                <div className='w-full z-30 flex justify-between flex-col lg:flex-row gap-10 pt-28 '>
                    {/* Home text  */}
                    <div data-aos="fade-in" className='lg:w-1/2 w-full lg:items-start md:items-center pt-10 space-y-12 '>

                        <h1 className=' font-[600]  lg:text-[3.5rem] text-5xl leading-[1.1] text-headingDark'>
                            Wanna place a commission?



                        </h1>
                        <p className='text-xl font-merryWeater'>We handle all commission requests through Twitter DMs or Discord!
                            That’s where we’ll chat, plan, and send all previews and updates. 💬💕
                            <br/> <br/>
                            Just hit us up — we’re friendly, responsive, and super excited to hear your idea!


                        </p>

                        <div className=' flex md:flex-row flex-col sm:rounded-md gap-4 md:w-auto w-full text-md xl:text-lg  '>
                            <button className=' px-8 py-2  font-bold cursor-pointer transition-all duration-300 bg-iconColor  text-blackText border-[1px] hover:-translate-y-2 border-blackText text-center rounded-md '> Message on Twitter </button>

                            <button className=' px-8 py-2  font-bold cursor-pointer transition-all duration-300 bg-iconColor  text-blackText border-[1px] hover:-translate-y-2 border-blackText text-center rounded-md '> Message on Twitter </button>

                        </div>
                    </div>
                    <div data-aos="fade-in" className=' lg:w-[450px] w-full lg:h-full h-[20rem] pt-4  ' style={{ backgroundImage: `url("${heroImg}")`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
                </div>
            </div>
        </div>
    )
}

export default OrderFrom
