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

  const { scrwidth , currPage , setcurrPage } = useContext(ContextAPI);

  const handleCurrPage = (page_num) => {
        setcurrPage(page_num)
        // console.log(page_num)
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
      <span onClick={scrollToTop} className={`z-50 fixed sm:bottom-5 bottom-10 ${!isVisible && 'hidden opacity-100'} right-5 lg:text-5xl text-3xl transition-all text-white  bg-[#16316a] lg:p-2 cursor-pointer rounded-full  `}><FaArrowAltCircleUp /></span>

      {scrwidth > 1280 ? (
        <div className={`w-full fixed font-mPlus  flex justify-between items-center sm:px-28  2xl:px-80 px-4 py-4  z-50 ${isVisible ? 'bg-secondaryDark' : 'bg-secondaryDark'} transition-all text-headingDark` }>
          {/* Logo image started  */}
          {/* <Link to="/" className='w-[7%] h-16  px-4  ' style={{ backgroundImage: `url(${"https://upload.wikimedia.org/wikipedia/en/e/eb/JDC_Foundation_Logo.png"})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} /> */}
          <Link to="/" >
          <img src="https://res.cloudinary.com/dqflexfdy/image/upload/v1754810921/YummeArc-05_nehado.png" alt="yumearc logo" className='w-28'/></Link>
          {/* Logo image done  */}

          <div className='flex justify-center items-center gap-x-6 font-semibold text-headingDark'>
            

            <div className='flex flex-col group items-center'>
              <Link onClick={() => handleCurrPage("Portfolio")} to={"/portfolio"} className='text-lg font-bold z-10 '>Portfolio</Link>
              <span className={`w-full transition-all ${currPage == "Portfolio" ? 'translate-y-0 bg-headingDark' : 'group-hover:translate-y-0 -translate-y-4  group-hover:bg-headingDark bg-transparent'} z-0 py-[2px] rounded-full`}/>
            </div>
            <div className='flex flex-col group items-center'>
              <Link onClick={() => handleCurrPage("About")} to={"/about"} className='text-lg font-bold z-10 '>About</Link>
              <span className={`w-full transition-all ${currPage == "About" ? 'translate-y-0 bg-headingDark' : 'group-hover:translate-y-0 -translate-y-4  group-hover:bg-headingDark bg-transparent'} z-0 py-[2px] rounded-full`} />
            </div>

            <div className='flex flex-col group items-center'>
              <Link onClick={() => handleCurrPage("Service")} to={"/service"} className='text-lg font-bold z-10 '>Services</Link>
              <span className={`w-full transition-all ${currPage == "Service" ? 'translate-y-0 bg-headingDark' : 'group-hover:translate-y-0 -translate-y-4  group-hover:bg-headingDark bg-transparent'} z-0 py-[2px] rounded-full`} />
            </div>

            <div className='flex flex-col group items-center'>
              <Link onClick={() => handleCurrPage("Comission")} to={"/comission"} className='text-lg font-bold z-10 '>Comission</Link>
              <span className={`w-full transition-all ${currPage == "Comission" ? 'translate-y-0 bg-headingDark' : 'group-hover:translate-y-0 -translate-y-4  group-hover:bg-headingDark bg-transparent'} z-0 py-[2px] rounded-full`} />
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