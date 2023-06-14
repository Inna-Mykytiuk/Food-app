import React, {useState} from 'react';
import { RiShoppingBasketFill } from 'react-icons/ri';
import { motion } from 'framer-motion';

const RowContainer = ({flag}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={`w-full my-12   ${flag ? 'overflow-x-scroll' : 'overflow-x-hidden'}`}
    >

    <div className='w-300 md:w-340 h-auto backdrop-blur-lg my-12 border-none rounded-3xl p-2 cursor-pointer'
          style={{ color: 'white',
          backdropFilter: 'blur(5px)',
          backgroundColor: 'rgba(90, 72, 72, 0.3)',
          boxShadow: 'rgba(0, 0, 0, 0.5) 0px 5px 15px' }}

          >
      <div
        className='w-full flex items-center justify-between '>
        <motion.img
        whileTap={{scale: 1.2}}
        src="https://firebasestorage.googleapis.com/v0/b/foodapp-b4f5f.appspot.com/o/Images%2F1686771923791-f10.png?alt=media&token=5dc0e0f6-e00f-4af4-817f-d39ba2d2183d"
        alt=""
          className='w-40 -mt-8'
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
          Watermelon
        </p>
        <p className='mt-1 text-mainTextGrey text-sm'>45 Calories</p>
        <div className='flex items-center gap-8'>
          <p className='text-lg text-white font-semibold'>
          <span className='text-sm text-white'>$</span> 4.80
          </p>
        </div>
      </div>
    </div>

    </div>
  )
}

export default RowContainer
