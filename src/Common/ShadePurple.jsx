import React from 'react'

const ShadePurple = ({className}) => {
  return (
    <span className={`${className || ' '} rounded-full absolute blur-sm  from-purpleShadow to-transparent ` }>
      
    </span>
  )
}

export default ShadePurple
