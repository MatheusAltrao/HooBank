import React from 'react'
import styles from "../src/style";
import AOS from 'aos';
import 'aos/dist/aos.css';



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
} from './components'

const App = () => {
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
        </div>
      </div>

    </div>
  )
}

export default App