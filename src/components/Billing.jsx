import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id="product" className='flex md:flex-row flex-col-reverse sm:py-16 py-6 '>

      <div data-aos="fade-right" className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className='w-full h-full relative z-5' />
      </div>


      <div className="absolute z-[3] -left-1/2 top-400px w-[300px] h-[200px] rounded-full white__gradient" />

      <div className="absolute z-[0] w-[50%] h-[50%] top-300px left-0 rounded-full pink__gradient" />


      <div className={layout.sectionInfo}>
        <h2 data-aos="fade-left" className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing
        </h2>
        <p data-aos="fade-left" className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className='flex flex-row flex-wrap sm:mt-10 mt-6 relative'>
          <img data-aos="fade-up" src={apple} alt="apple_store" className='w-[8rem] h-[2.625rem] object-contain mr-5 cursor-pointer' />
          <img data-aos="fade-up" src={google} alt="google_pay" className='w-[8rem] h-[2.625rem] object-contain mr-5 cursor-pointer' />

          <div className="absolute z-[3] top-[-100px] right-100px w-[300px] h-[200px] rounded-full blue__gradient" />


        </div>

      </div>
    </section>
  )
}

export default Billing