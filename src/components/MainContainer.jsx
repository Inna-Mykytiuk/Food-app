import React, { useEffect, useState } from "react";
import HomeContainer from './HomeContainer';
import { motion } from 'framer-motion';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useStateValue } from 'context/StateProvider';
import RowContainer from "./RowContainer";




const MainContainer = () => {
  // eslint-disable-next-line no-unused-vars
  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue, cartShow]);

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center '
    >
    <HomeContainer/>

    <section className='w-full mt-17 p-6 px-10 md:mt-8 md:px-16 lg:px-20 py-4'>
      <div className='w-full flex items-center justify-between'>
        <p className='text-2xl font-semibold capitalize relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-br from-hoverColor to-logoColor text-white transition-all ease-in-out duration-100'>Our fresh & <span className="text-logoColor">healthy fruits</span>
        </p>

        <div className='hidden md:flex gap-3 items-center'>
          <motion.div
          whileTap={{scale: 0.75}}
          className='w-8 h-8 rounded-lg bg-purple-300 hover:bg-logoColor hover:shadow-lg flex cursor-pointer items-center justify-center transition-all ease-in-out duration-100'
          onClick={() => setScrollValue(-200)}>
          <MdChevronLeft className="text-lg text-white" />
          </motion.div>
          <motion.div
          whileTap={{scale: 0.75}}
          className='w-8 h-8 rounded-lg bg-purple-300 hover:bg-logoColor hover:shadow-lg flex cursor-pointer items-center justify-center transition-all ease-in-out duration-100'
          onClick={() => setScrollValue(200)}>
          <MdChevronRight className="text-lg text-white" />
          </motion.div>
        </div>
      </div>
      <RowContainer
      scrollValue = {scrollValue}
      flag={true}
      data={foodItems?.filter(n => n.category === 'fruits')}/>
    </section>
    </div>
  );
};

export default MainContainer;
//className="bg-mainGrey"
