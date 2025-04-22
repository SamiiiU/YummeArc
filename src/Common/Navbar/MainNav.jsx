import React, { useContext, useEffect, useState } from 'react'

import { FaArrowAltCircleUp } from 'react-icons/fa';

import { ContextAPI } from '../../GlobalProvider/ContextAPI';
import MobNav from './MobNav';
import { Link } from 'react-router-dom';



const MainNav = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // const [scrwidth, setWidth] = useState(window.innerWidth); //state for windows width measuring
  const [isBigMenu, setIsBigMenu] = useState(false); // state for the navigation hover hanlde of bis screens
  const [isVisible, setIsVisible] = useState(false); // it is for scroll to top button



  const [currDataIndex, setCurrDataIndex] = useState(null)

  const { scrwidth } = useContext(ContextAPI);

  //handler for main screen navigation 
  const navHandler = (index, status) => {
    setIsBigMenu(status == true ? false : true);


    if (index - 1 != currDataIndex) {
      setTimeout(() => {
        setIsBigMenu(status);
        setCurrDataIndex(index - 1);

      }, 200);
    } else {
      setCurrDataIndex(null)
    }


  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // User is scrolling down
        setIsNavbarVisible(false);
      } else {
        // User is scrolling up
        setIsNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);




  useEffect(() => {

    window.addEventListener('scroll', toggleVisibility);
    // Cleanup function to remove the event listener on unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    };

  }, []);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };




  return (
    <>

      {/* button for scrolling to top  */}
      {/* <span onClick={scrollToTop} className={`z-50 fixed sm:bottom-5 bottom-10 ${!isVisible && 'hidden opacity-100'} right-5 lg:text-5xl text-3xl transition-all text-white  bg-[#16316a] lg:p-2 cursor-pointer rounded-full  `}><FaArrowAltCircleUp /></span> */}

      {scrwidth > 1280 ? (
        <div className='w-full flex justify-evenly items-center px-6 py-2  z-50 bg-white'>
          {/* Logo image started  */}
          <Link to="/" className='w-[7%] h-16  px-4  ' style={{ backgroundImage: `url(${"https://upload.wikimedia.org/wikipedia/en/e/eb/JDC_Foundation_Logo.png"})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
          {/* Logo image done  */}

          <div className='flex justify-center items-center gap-x-6 font-bold text-textColor'>
            <div className='flex flex-col group items-center'>
              <Link to={"/About"} className='text-lg font-bold z-10 '>Home</Link>
              <span className='w-full transition-all group-hover:translate-y-0 -translate-y-4 z-0 py-[2px] group-hover:bg-textColor bg-transparent rounded-full' />
            </div>

            <div className='flex flex-col group items-center'>
              <Link to={"/About"} className='text-lg font-bold z-10 '>About</Link>
              <span className='w-full transition-all group-hover:translate-y-0 -translate-y-4 z-0 py-[2px] group-hover:bg-textColor bg-transparent rounded-full' />
            </div>

            <div className='flex flex-col group items-center'>
              <Link to={"/About"} className='text-lg font-bold z-10 '>Portfolio</Link>
              <span className='w-full transition-all group-hover:translate-y-0 -translate-y-4 z-0 py-[2px] group-hover:bg-textColor bg-transparent rounded-full' />
            </div>

            <div className='flex flex-col group items-center'>
              <Link to={"/About"} className='text-lg font-bold z-10 '>Contact</Link>
              <span className='w-full transition-all group-hover:translate-y-0 -translate-y-4 z-0 py-[2px] group-hover:bg-textColor bg-transparent rounded-full' />
            </div>

            

          </div>


        </div >

      ) : (

        // Nav for small devices is started here 
        <>


          <MobNav />

        </>



      )}

    </>
  )
}

export default MainNav