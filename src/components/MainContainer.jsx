import React from 'react';
import Delivery from '../img/delivery.png'

const MainContainer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
      <div className='py-2 flex-1 flex flex-col items-start justify-center md:item-center'>
        <div className='flex items-center gap-2 justify-center bg-logoColor px-4 py-1 rounded-full'>
        <p className='text-white text-center text-base font-semibold'>Bike Delivery</p>
        <div className='w-8 h-8 bg-logoColor rounded-full overflow-hidden drop-shadow-md'>
        <img src={Delivery} className='w-full h-full object-contain bg-white' alt='delivery' />
        </div>
        </div>

        <p className='text-[2.5rem] font-bold tracking-wide text-white'>The Fatest Delivery in <span className='text-logoColor'>Your City</span></p>
      </div>
      <div className='py-2 bg-blue-400 flex-1'></div>
    </div>
  );
};

export default MainContainer;
//className="bg-mainGrey"
