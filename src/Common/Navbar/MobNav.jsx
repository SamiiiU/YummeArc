import React, { useState } from 'react'
import { LuMenu } from 'react-icons/lu'
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const MobNav = () => {
  const [isOpen , setIsOpen] = useState(false)

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className='w-full p-4  z-50  fixed text-headingDark bg-primaryDark bg-opacity-90 backdrop-blur-sm'>
      <div className='w-full flex justify-between items-center z-50 relative '>
        {/* Logo image started  */}
        {/* <Link to="/" className='w-[15%] h-10    ' style={{ backgroundImage: `url(${"https://upload.wikimedia.org/wikipedia/en/e/eb/JDC_Foundation_Logo.png"})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} /> */}

        <Link to="/" >
                  <img src="https://res.cloudinary.com/dqflexfdy/image/upload/v1754810921/YummeArc-05_nehado.png" alt="yumearc logo" className='w-20'/></Link>

        {/* Logo image done  */}
        <span onClick={() => handleIsOpen()} className='text-3xl transition-all'>
          {isOpen ? <RxCross2 /> : <LuMenu/>}
        </span>
      </div>

      <div className='w-full h-screen fixed top-0 left-0 p-4 pt-20 bg-primaryDark z-40  transition-all duration-200'
      style={{transform : isOpen ? 'translateY(0)' : 'translateY(-100%)'}}>
         <div className='grid xs:grid-cols-2 grid-cols-1 gap-6 '>
         <Link to={"/"} className='text-2xl font-bold col-span-1 text-center bg-purpleTo rounded-xl p-6 bg-white/10  '>Home</Link>
         <Link to={"/portfolio"} className='text-2xl font-bold col-span-1 text-center bg-purpleTo rounded-xl p-6 bg-white/10  '>Portfolio</Link>
         <Link to={"/about"} className='text-2xl font-bold col-span-1 text-center bg-purpleTo rounded-xl p-6 bg-white/10  '>About </Link>
         <Link to={"/comission"} className='text-2xl font-bold col-span-1 text-center bg-purpleTo rounded-xl   p-6 bg-white/10 '>Comission </Link>
         <Link to={"/service"} className='text-2xl font-bold col-span-1 text-center bg-purpleTo rounded-xl p-6 bg-white/10 '>Service </Link>
         </div>
         

      </div>
    </div>
  )
}

export default MobNav
// :   