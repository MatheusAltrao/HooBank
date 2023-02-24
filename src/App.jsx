import React from 'react'

import 'aos/dist/aos.css';
import { useState, useEffect, useRef } from 'react';
import { Transition, CSSTransition, SwitchTransition, TransitionGroup } from "react-transition-group";

import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Clients,
  CTA,
  Testimonials,
  Footer,
  ButtonTop
} from './components'

const App = () => {


  const [backToTopButton, setBackToTopButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {

      if (scrollY > 500) {
        setBackToTopButton(true)
      } else {
        setBackToTopButton(false)
      }
    })
  }, [])



  return (
    <div className="w-full overflow-hidden xl:max-w-[1300px] mx-auto">
      <div className='sm:px-20 px-6  '>
        <div className="xl:max-w-[1300px] w-full">
          <Navbar />
        </div>
      </div>

      <div className={`flex justify-center items-start sm:px-20 px-6 `}>
        <div className={`xl:max-w-[1300px] w-full`}>
          <Hero />
        </div>
      </div>

      <div className={`sm:px-20 px-6 flex justify-center items-center`}>
        <div className={`xl:max-w-[1300px] w-full`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />


          {backToTopButton && (


            <ButtonTop opacity='opacity-100' />


          )}





        </div>
      </div>

    </div>
  )
}

export default App