import React from 'react'
import { useEffect, useRef } from 'react'

import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'


const Hero = () => {

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>

      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 `}>

        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 animate-left4">

          <img className='w-8 h-8' src={discount} alt="discount" />

          <p className={`${styles.paragraph} font-light`} >
            <span className='font-medium'>20% </span>
            Discount For {''}
            <span className='font-medium'> 1 Month </span>
            Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] animate-left6">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient animate-left8">Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0  ">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[58px] text-[3.25rem] text-white ss:leading-[100.8px] leading-[75px] w-full animate-left10">Payment Method. </h1>

        <p className={`${styles.paragraph} max-w-[440px] mt-3 opacity-60 animate-left12`} >Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. <br />
          We examine annual percentage rates, annual fees.
        </p>


      </div>



      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>

        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5] sm:right-[0] right-[-25px]" />


        <div className="absolute z-[0] w-[50%] h-[50%] rounded-full top-0 blue__gradient" />
        <div className="absolute z-[0] w-[20%] h-[50%] rounded-full top-20 blue__gradient" />
        <div className="absolute z-[0] w-[10%] h-[50%] rounded-full top-50 blue__gradient" />

      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>

        <GetStarted />

      </div>

    </section >
  )
}

export default Hero