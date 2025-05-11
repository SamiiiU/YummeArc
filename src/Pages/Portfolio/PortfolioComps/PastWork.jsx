import React, { useState } from 'react'
import { portfolio_data } from '../../../WebData/Portfolio'

const PastWork = () => {
  const [currCategory, setCurrCategory] = useState(0)
  const [showMore, setShowMore] = useState(false)

  // Get images based on showMore state
  const imagesToShow = showMore
    ? portfolio_data[currCategory].images
    : portfolio_data[currCategory].images.slice(0, 3)

  return (
    <div className='w-full text-textColor px-4 sm:px-12 2xl:px-80 flex flex-col items-center relative py-10'>

      <div className='w-full flex justify-center items-center gap-10 flex-wrap mb-20'>
        {portfolio_data.map((item, index) => (
          <h1
            onClick={() => {
              setCurrCategory(index)
              setShowMore(false) // Reset showMore on category change
            }}
            key={index}
            style={{
              boxShadow: currCategory === index
                ? '0px 8px 15px 3px rgba(0, 0, 0, 0.1)'
                : '0px 1px 3px 2px rgba(0, 0, 0, 0.1)',
              backgroundColor: currCategory === index ? '#2e1e4d' : '',
              color: currCategory === index ? 'white' : '#2e1e4d'

            }}
            className='font-bold text-xl bg-white px-3 py-2 rounded-md cursor-pointer transition-all'
          >
            {item.category}
          </h1>
        ))}
      </div>

      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {imagesToShow.map((image, idx) => (
          <div
            key={idx}
            className='col-span-1 h-[25rem] bg-pink-500'
            style={{
              backgroundImage: `url(${image.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top'
            }}
          />
        ))}
      </div>

      {portfolio_data[currCategory].images.length > 3 && (
        <button
          onClick={() => setShowMore(!showMore)}
          className='px-4 py-2 font-bold bg-textColor shadow-sm cursor-pointer text-white mt-10 rounded-md'
        >
          {showMore ? 'View Less' : 'View More'}
        </button>
      )}
    </div>
  )
}

export default PastWork
