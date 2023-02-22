import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] rounded-lg box-shadow-blue text-black outline-none ${styles} hover:bg-none 
    hover:text-cyan-300 ease duration-300  border-[1px] border-cyan-300`} >Get Started</button>
  )
}

export default Button