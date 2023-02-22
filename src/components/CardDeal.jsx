import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 data-aos="fade-left" className={styles.heading2}>Find a better card deal <br className='sm:flex hidden' /> in few easy steps.</h2>
        <p data-aos="fade-left" className={`${styles.paragraph} max-w-[29.375rem] mt-5 opacity-60`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>

        <Button styles={`mt-10`} />
      </div>

      <div className={layout.sectionImg} >
        <img data-aos="fade-right" src={card} alt="card" className='w-full h-full' />
      </div>

    </section>
  )
}

export default CardDeal