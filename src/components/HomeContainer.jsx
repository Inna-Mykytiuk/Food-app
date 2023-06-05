import React from 'react';
import Delivery from '../img/delivery.png'

const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
      <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
        <div className='flex items-center gap-2 justify-center bg-logoColor px-4 py-1 rounded-full'>
        <p className='text-white text-center text-base font-semibold'>Bike Delivery</p>
        <div className='w-8 h-8 bg-logoColor rounded-full overflow-hidden drop-shadow-md'>
        <img src={Delivery} className='w-full h-full object-contain bg-white' alt='delivery' />
        </div>
        </div>

        <p className='lg:text-[4.25rem] text-[2.5rem] font-bold tracking-wide text-white'>The Fatest Delivery in <span className='text-logoColor text-[3rem] lg:text-[4.75rem]'>Your City</span></p>

        <p className='text-base text-mainTextGrey text-center md:text-left md:w-[80%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit praesentium at temporibus mollitia quas qui numquam, adipisci commodi. Laudantium autem vero corporis quae. Impedit tempore quos blanditiis odio ullam error?</p>

        <button type='button' className='md:w-auto sm:w-auto  bg-gradient-to-br from-hoverColor to-logoColor w-full py-2 px-4 rounded-lg text-base text-white hover:shadow-red transition-all ease-in-out duration-100' style={{
          boxShadow: '0 2px 6px 0 grey',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        onMouseOver={(e) => (e.target.style.boxShadow = '0 2px 6px 0 grey')}
        onMouseOut={(e) => (e.target.style.boxShadow = '')}>Order Now</button>
      </div>
      <div className='py-2 bg-blue-400 flex-1'></div>
    </section>
  )
}

export default HomeContainer
