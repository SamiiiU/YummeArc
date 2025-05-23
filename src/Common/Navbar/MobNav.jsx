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
    <div className='w-full p-4  z-50 bg-white relative font-orbitron'>
      <div className='w-full flex justify-between items-center z-50 relative bg-white'>
        {/* Logo image started  */}
        {/* <Link to="/" className='w-[15%] h-10    ' style={{ backgroundImage: `url(${"https://upload.wikimedia.org/wikipedia/en/e/eb/JDC_Foundation_Logo.png"})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} /> */}

        <h1 className='text-5xl font-bold font-kaushans'>YummeArc</h1>

        {/* Logo image done  */}
        <span onClick={() => handleIsOpen()} className='text-4xl transition-all'>
          {isOpen ? <RxCross2 /> : <LuMenu/>}
        </span>
      </div>

      <div className='w-full h-screen fixed top-0 left-0 p-4 pt-20 bg-white z-40  transition-all duration-200'
      style={{transform : isOpen ? 'translateY(0)' : 'translateY(-100%)'}}>
         <div className='grid xs:grid-cols-2 grid-cols-1 gap-6 '>
         <Link to={"/"} className='text-2xl font-bold col-span-1 text-center bg-purpleTo rounded-xl p-8 '>Home</Link>
         <Link to={"/portfolio"} className='text-2xl font-bold col-span-1 text-center bg-purpleTo rounded-xl p-8 '>Portfolio</Link>
         <Link to={"/about"} className='text-2xl font-bold col-span-1 text-center bg-purpleTo rounded-xl p-8 '>About </Link>
         <Link to={"/comission"} className='text-2xl font-bold col-span-1 text-center bg-purpleTo rounded-xl p-8 '>Comission </Link>
         </div>

      </div>
    </div>
  )
}

export default MobNav
// :   