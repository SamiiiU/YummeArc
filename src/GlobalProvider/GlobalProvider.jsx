import React, { useEffect, useState } from 'react'
import { ContextAPI } from './ContextAPI'

const GlobalProvider = ({ children }) => {
  const [scrwidth, setWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(false)
  const [currPage, setcurrPage] = useState("Home")
  const [isFormOpen , setIsFormOpen] = useState(false);
  const [isFormsaOpen , setIsFsadormOpen] = useState(false);




  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    // Add event listener
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    };

  }, []);

  return (
    <ContextAPI.Provider value={{
      scrwidth,
      loading, setLoading,
      currPage, setcurrPage,
      isFormOpen , setIsFormOpen,

    }}>
      {children}
    </ContextAPI.Provider>
  )
}

export default GlobalProvider