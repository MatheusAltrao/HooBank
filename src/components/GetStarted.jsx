import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px]  rounded-full bg-blue-gradient p-[2px] cursor-pointer  animate-bounce   `}>

      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full   `}>

        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-medium text-[1.125rem] leading-[1.4375rem] mr-2  '>
            <span className='text-gradient'>Get  </span>
          </p>

          <img className='w-[1.4375rem] h-[1.4375rem] object-contain' src={arrowUp} alt="arrowUp" />

        </div>
        <p className='font-medium text-[1.125rem] leading-[1.4375rem] '>
          <span className='text-gradient'>Started</span>
        </p>
      </div>

    </div>
  )
}

export default GetStarted