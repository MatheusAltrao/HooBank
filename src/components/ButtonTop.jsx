import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai';


const ButtonTop = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }



  return (
    <button onClick={scrollTop} className='z-20 sidebarRight
      fixed bottom-4 right-4 bg-cyan-700 h-9 w-9 rounded-full flex items-center justify-center shadow-xl shadow-black ' > <AiOutlineArrowUp size={22} /> </button>
  )
}

export default ButtonTop