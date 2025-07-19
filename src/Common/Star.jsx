import React from 'react'

const Star = ({className}) => {
  return (
      <span className={`${className || ' '} absolute text-iconColor/50 blur-[2px] text-4xl   `}>
        ★
      </span>
  )
}

export default Star
