import React from 'react'
import { quotes } from '../assets'

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-md max-w-[366px] md:mr:10 sm:mr-5 mr-0 my-5 feedback-card border border-cyan-300 shadow-lg shadow-cyan-900 '>

      <img src={quotes} alt="quotes" className='w-10 h-7 object-contain' />

      <p className='font-normal text-[1.125rem] leading-8 my-10' >{content}</p>

      <div className='flex flex-row' >
        <img src={img} alt="perfil" className='w-[48px] h-[48px] rounded-full' />

        <div className='flex flex-col ml-4' >
          <h4 className='font-semibold text-[1.25rem] leading-8 '>{name}</h4>
          <p className='font-normal text-4 leading-8'>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard