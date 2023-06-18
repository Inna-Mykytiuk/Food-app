import React from 'react'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { BiMinus, BiPlus } from "react-icons/bi";

import { motion } from "framer-motion";

const CartContainer = () => {
  return (
    <div className='fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]'>

      <div className='w-full flex items-center justify-between p-4 cursor-pointer'>
      <motion.div whileTap={{scale: 0.75}}>
        <MdOutlineKeyboardBackspace className='text-mainColor text-3xl'/>
      </motion.div>
        <p className='text-mainColor text-lg font-semibold'>Cart</p>
        <motion.p
        whileTap={{scale: 0.75}}
        className='flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-mainColor text-base'>Clear <RiRefreshFill />{" "}</motion.p>
      </div>

{/* bottom section */}
      <div className='w-full h-full bg-purple-100 rounded-t-[2rem] flex flex-col justify-between items-center'>
{/* cart Item section */}
        <div className='w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
{/* cart Item */}
          <div className='w-full p-1 px-2 rounded-lg bg-white flex items-center gap-2'>
            <img src="https://firebasestorage.googleapis.com/v0/b/foodapp-b4f5f.appspot.com/o/Images%2F1686767828629-i1.png?alt=media&token=1648cfbb-f3a3-4b73-9536-c320ce9c406c"
            alt=""
            className='w-20 h-20 max-w-[60px] rounded-full object-contain' />

{/* name section */}
            <div className='flex flex-col gap-2'>
              <p className='text-base text-mainTextColor'>
                Chockolate & Vanilla
              </p>
              <p className='text-sm block text-mainColor font-semibold'>
                $ 5.25
              </p>
            </div>

{/*button section */}
            <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
              <motion.div
              whileTap={{scale: 0.75}}>
                <BiMinus className="text-mainColor  " />
              </motion.div>
              <p className="w-5 h-5 rounded-full bg-logoColor text-white flex items-center justify-center">
                1
              </p>
              <motion.div
              whileTap={{scale: 0.75}}>
                <BiPlus className="text-mainColor " />
              </motion.div>
            </div>
          </div>
        </div>

{/* cart total section */}
<div className='w-full flex-1 bg-white rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2 gap-4'>
        <div className="w-full flex items-center justify-between">
          <p className="text-mainColor text-lg">Sub Total</p>
          <p className="text-mainColor text-lg">$ 8.5</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="text-mainTextColor text-lg">Delivery</p>
          <p className="text-mainTextColor text-lg">$ 2.5</p>
        </div>

        <div className="w-full border-b border-mainColor my-2"></div>

        <div className="w-full flex items-center justify-between">
          <p className="text-logoColor text-xl font-semibold">Total</p>
          <p className="text-logoColor text-xl font-semibold">
            $tot +2.5
          </p>
        </div>

        <motion.button
          whileTap={{ scale: 0.8 }}
          type="button"
          className="w-full p-2 rounded-full  bg-logoColor text-gray-50 text-lg my-2 hover:shadow-lg"
        >
          Check Out
        </motion.button>
        </div>
      </div>
    </div>
  )
}

export default CartContainer


