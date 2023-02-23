import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import FeedbackCard from './FeedbackCard'


const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.paddingY} flex justify-center items-center flex-col relative`} >

      <div className='absolute z-5 w-[300px] h-[300px] top-0 right-[100px] rounded-full 
      sm:hidden  blue__gradient' />

      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-1'>
        <h1 data-aos="fade-right" className={styles.heading2} >What people are <br className='sm:block hidden' /> saying about us</h1>

        <div className='w-full md:mt-0 mt-6'>
          <p data-aos="fade-left" className={`${styles.paragraph} max-w-[470px] opacity-60`} >
            Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>
        </div>

      </div>

      <div className='flex flex-wrap  justify-center w-full feedback-container relative z-1'>
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}

      </div>

    </section>
  )
}

export default Testimonials