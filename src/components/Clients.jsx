import React from 'react'
import { clients } from '../constants'
import styles from '../style'


const Clients = () => {
  return (
    <section className={`flex justify-center items-center my-4`}>

      <div className={`flex justify-center items-center flex-wrap w-full gap-4 `}>

        {clients.map((client) => (
          <div key={client.id} className={`flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px]`} >
            <img data-aos="fade-down" src={client.logo} alt='logo' className='sm:w-[192px] w-[100px] object-contain' />
          </div>
        ))}

      </div>

    </section>
  )
}

export default Clients