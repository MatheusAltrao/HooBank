import React, { useState } from 'react'
import { close, logo, menu } from '../assets'
import { IoMdClose } from 'react-icons/io';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';


import { navLinks } from '../constants'

const Navbar = () => {

  const [toggle, setToggle] = useState(true)


  return (
    <nav className="w-full flex py-6 justify-between items-center  ">

      <img src={logo} alt="hoobank"
        className='w-[124px] h-[32px] animate-left' />

      <ul className='list-none sm:flex hidden justify-end items-center gap-4 flex-1 '>
        {navLinks.map((nav) => (
          <li key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[1rem] hover:text-cyan-300  ease animate-top6 `}>

            <a href={`#${nav.id}`}>
              {nav.title}
            </a>

          </li>
        ))}

      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center '>

        <i className='relative z-20 cursor-pointer' onClick={() => setToggle((prev) => !prev)}  >
          {toggle ? <HiOutlineMenuAlt3 size={28} color='#fff' /> : <IoMdClose size={28} color='#fff' />}
        </i>

        <div className={`${toggle ? 'hidden' : 'flex'}
         p-6 bg-black-gradient absolute top-20 mx-4 my-2 min-w-[8.75rem] rounded-xl sidebarRight  z-10 `}
        >

          <ul className='list-none flex justify-start items-center flex-col gap-4 flex-1  '>
            {navLinks.map((nav, index) => (
              <li key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[1rem]   `}>

                <a onClick={() => setToggle((prev) => !prev)} href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}

          </ul>

        </div>
      </div>

    </nav>
  )
}

export default Navbar