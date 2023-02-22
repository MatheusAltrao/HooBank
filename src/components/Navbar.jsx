import React, { useState } from 'react'
import { close, logo, menu } from '../assets'

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
        <img className='w-[1.5rem] object-cover cursor-pointer'
          src={toggle ? menu : close}
          alt='icon close end menu'
          onClick={() => setToggle((prev) => !prev)} />

        <div className={`${toggle ? 'hidden' : 'flex'}
         p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[8.75rem] rounded-xl sidebar`}
        >

          <ul className='list-none flex justify-end items-center flex-col gap-4 flex-1 '>
            {navLinks.map((nav, index) => (
              <li key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[1rem]   `}>

                <a href={`#${nav.id}`}>
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