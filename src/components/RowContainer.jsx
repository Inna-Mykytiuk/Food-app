import React,  { useEffect, useRef, useState } from 'react';
import { RiShoppingBasketFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
// import { useStateValue } from 'context/StateProvider';
// import { actionType } from 'context/reducer';

const RowContainer = ({flag, data, scrollValue}) => {
  console.log(data)

  useEffect(() => {
rowContainer.current.scrollLeft += scrollValue
  }, [scrollValue])

  const [isHovered, setIsHovered] = useState(false);
  const rowContainer = useRef();

  return (
    <div
    ref={rowContainer}
    className={`w-full flex items-center gap-4 my-12 scroll-smooth  ${
      flag
      ? 'overflow-x-scroll scrollbar-none'
      : 'overflow-x-hidden flex-wrap'
      }`}
    >

    {data && data.map(item => (
      <div
      key={item.id}
      className='min-w-[250px] w-300 h-[220px] md:w-340 md:min-w-[300px] backdrop-blur-lg my-12 border-none rounded-3xl px-4 cursor-pointer'
          style={{ color: 'white',
          backdropFilter: 'blur(5px)',
          backgroundColor: 'rgba(90, 72, 72, 0.3)',
          boxShadow: 'rgba(0, 0, 0, 0.5) 0px 5px 15px' }}

          >
      <div
        className='w-full flex items-center justify-between '>
        <motion.img
        whileTap={{scale: 1.2}}
        src={item?.imageURL}
        alt="image"
        className='w-30 h-[140px] -mt-8'
        />
        <motion.div
        whileTap={{scale: 0.75}}
        className='w-8 h-8 rounded-full bg-mainColor flex items-center justify-center hover:bg-logoColor hover:text-white transition-all ease-in-out duration-100 cursor-pointer'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <RiShoppingBasketFill
        className={`text-2xl  transition-all ease-in-out duration-100 ${isHovered ? 'text-white' : 'text-mainTextGrey'}`}
      />
        </motion.div>
      </div>

      <div className='w-full flex flex-col gap-2 items-end justify-end'>
        <p className='text-white font-semibold text-base md:text-lg'>
        {item?.title}
        </p>
        <p className='mt-1 text-mainTextGrey text-sm'>{item?.calories} Calories</p>
        <div className='flex items-center gap-8'>
          <p className='text-lg text-white font-semibold'>
          <span className='text-sm text-white'>$</span> {item?.price}
          </p>
        </div>
      </div>
    </div>
    ))}

    </div>
  )
}

export default RowContainer
