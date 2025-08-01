import React from 'react'
import AOSInitializer from '../../../Common/AOS/AOSInitializer'
import ShadePurple from '../../../Common/ShadePurple'
import { BsCash } from 'react-icons/bs'
import { RiLoopLeftLine } from 'react-icons/ri'
import { CiCreditCard1 } from 'react-icons/ci'
import { FaHandshakeSimple } from 'react-icons/fa6'
import image from '../../../Assets/Images/comission/3.png'
const Costs = () => {
    return (
        <div className='w-full px-4 bg-secondaryDark sm:px-28  2xl:px-80  flex flex-col  relative space-y-6 
          text-textDark'>
            <AOSInitializer />

            {/* shading circle hai na idher sai start  */}
            <ShadePurple className={'-right-20 top-20 bg-gradient-to-r w-72 h-72'} />

            <ShadePurple className={'-left-24 bottom-20 bg-gradient-to-r w-72 h-72'} />

            {/* shading circle yaha sai khatam bus ok  */}

            <span className='w-full h-1/5 absolute bottom-0 z-0 right-0 bg-gradient-to-t from-primaryDark
                to-transparent' />
            <h1 data-aos="flip-up" className='font-kaushans text-headingDark text-5xl'>So... How Much Does It Cost? 💖</h1>

            <p className='text-xl w-2/3'>Every piece is fully custom — from the sketch to the final render. Prices depend on your character’s complexity, style, and animations. That’s why we don’t list fixed prices.


            </p>

            <p className='text-xl w-2/3'>We love working with all kinds of budgets — big or small. Whether you’re looking for a chibi panel or a full Live2D rigged model, we’ll figure it out together! Just send us your idea, and we’ll get back with a tailored quote.
            </p>

            <div className='flex md:flex-row flex-col w-full justify-between pr-20'>
                <ul className='text-xl space-y-3'>
                    <li className='flex gap-x-3 items-center'> <BsCash size="1.4em" /> 50% upfront, 50% on delivery</li>
                    <li className='flex gap-x-3 items-center'> <RiLoopLeftLine size="1.4em" /> Unlimited revisions till you’re happy</li>
                    <li className='flex gap-x-3 items-center'> <CiCreditCard1 size="1.4em" /> Multiple payment methods accepted</li>
                    <li className='flex gap-x-3 items-center'> <FaHandshakeSimple size="1.4em" /> No hidden charges, ever.</li>

                </ul>

                <img src={image} className='w-[300px] sm:-translate-y-32 translate-y-10'/>
            </div>
        </div>
    )
}

export default Costs
