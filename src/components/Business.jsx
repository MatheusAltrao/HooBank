import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

const FeaturesCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card `}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue `}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>

    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-semibold text-[1.125rem] leading-[1.4375rem] mb-1' >
        {title}
      </h4>
      <h4 className='font-normal text-[1rem] leading-[1.5rem] mb-1 opacity-60'>
        {content}
      </h4>
    </div>
  </div>

)

const Business = () => {
  return (
    <section id='features' className={layout.section} >
      <div className={layout.sectionInfo}>
        <h2 data-aos="fade-right" className=' font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full'>You do the business, <br className='sm:block hidden' /> we’ll handle the money.</h2>

        <p data-aos="fade-right" className={`${styles.paragraph} max-w-[470px] mt-5 opacity-60`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>

        <Button styles='mt-10' />
      </div>

      <div data-aos="fade-left" className={`${layout.sectionImg} flex-col`}  >
        {features.map((features, index) => (
          <FeaturesCard key={features.id} {...features} index={index} />
        ))}

      </div>
    </section>
  )
}

export default Business