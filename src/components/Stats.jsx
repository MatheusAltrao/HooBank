import React from 'react'
import { useEffect, useRef } from 'react'

import { stats } from '../constants'
import styles from '../style'

const Stats = () => {

  const countupTransactionNumber = useRef(null);
  const countUserNumber = useRef(null);
  const countCompanyNumber = useRef(null);

  let transaction;
  let countUser;
  let company



  useEffect(() => {
    initCountUp();
  }, []);

  async function initCountUp() {
    const countUpModule = await import('countup.js');
    transaction = new countUpModule.CountUp(countupTransactionNumber.current, 230);
    countUser = new countUpModule.CountUp(countUserNumber.current, 3800);
    company = new countUpModule.CountUp(countCompanyNumber.current, 400);

    if (!transaction.error) {
      transaction.start();
      countUser.start();
      company.start();
    } else {
      console.error(transaction.error);
    }
  }


  return (
    <section className={`${styles.flexCenter} sm:flex-row flex-col sm:mb-20 mb-6`}>

      <div className={`  flex-1 flex justify-start items-center sm:flex-row flex-col m-3 sm:border-r-[1px]  border-cyan-300`}>
        <h4 ref={countUserNumber} onClick={() => {
        }} className='font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] '>0</h4>
        <p className='font-semibold xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3  ' >User Active</p>
      </div>

      <div className={`  flex-1 flex justify-start items-center sm:flex-row flex-col m-3 sm:border-r-[1px]  border-cyan-300`}>
        <h4 ref={countCompanyNumber} onClick={() => {
        }} className='font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] '>0</h4>
        <p className='font-semibold xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3  ' >Trusted by company</p>
      </div>

      <div className={`  flex-1 flex justify-start items-center sm:flex-row flex-col m-3 sm:border-r-[1px]  border-cyan-300`}>
        <h4 ref={countupTransactionNumber} onClick={() => {
        }} className='font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] '>0</h4>
        <p className='font-semibold xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3  ' >transaction</p>
      </div>

    </section>
  )
}

export default Stats