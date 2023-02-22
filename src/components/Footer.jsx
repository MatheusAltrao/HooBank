import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>

        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img src={logo} alt="hoobank"
            className='w-[16.625rem] h-[4.5rem] object-contain' />

          <p className={`${styles.paragraph} mt-10 opacity-60 max-w-[20rem]`}>A new way to make the payments easy, reliable and secure.</p>
        </div>

        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>

          {footerLinks.map((footerLink) => (
            <div key={footerLink.title} className='flex flex-col ss:my-0 my-4 min-w-[9.375rem]' >

              <h4 className='font-bold text-[22px]'>
                {footerLink.title}
              </h4>

              <ul className='list-none mt-4'>
                {footerLink.links.map((link, index) => (
                  <li key={link.name} className={`text-[16px] leading-6 hover:text-secondary hover:opacity-100 cursor-pointer opacity-70 ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}  >
                    {link.name}
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>
      </div>

      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]' >
        <p className='font-normal text-center leading-6 text-[18px] opacity-60 mt-10'>Copyright © 2021 HooBank. All Rights Reserved.</p>

        <div className='flex flex-row md:mt-0 mt-6'>

          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-6 h-6 hover:decoration-cyan-300 object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'} `} />
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer