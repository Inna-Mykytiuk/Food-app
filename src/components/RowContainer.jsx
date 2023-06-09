import React, { useEffect, useRef } from 'react';
import { RiShoppingBasketFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import NotFound from '../img/NotFound.svg';
import { useStateValue } from 'context/StateProvider';
import { actionType } from 'context/reducer';

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef();
  const [{ cartItems }, dispatch] = useStateValue();

  const addItems = newItem => {
    const itemIndex = cartItems.findIndex(({ id }) => newItem.id === id);
    let updatedItems = [];
    if (itemIndex === -1) {
      updatedItems = [...cartItems, newItem];
    } else {
      const incrementedItem = {
        ...cartItems[itemIndex],
        qty: cartItems[itemIndex].qty + 1,
      };
      updatedItems = [...cartItems];
      updatedItems.splice(itemIndex, 1, incrementedItem);
    }
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: updatedItems,
    });
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center gap-4 scroll-smooth ${
        flag
          ? 'overflow-x-scroll scrollbar-none'
          : 'overflow-x-hidden flex-wrap justify-center'
      }`}
    >
      {data && data.length > 0 ? (
        data.map(item => (
          <div
            key={item?.id}
            className="min-w-[220px] w-275 h-[225px] md:w-300 md:min-w-[300px] backdrop-blur-xl mt-10 lg:mt-[3rem] mb-4 lg:mb-12 border-none rounded-lg p-4 cursor-pointer flex flex-col items-center justify-between bg-itemBg"
          >
            <div className="w-full flex items-center justify-between ">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={item?.imageURL}
                alt="image"
                className="w-30 h-[140px] -mt-12"
              />
              <motion.div
                whileTap={{ scale: 0.75 }}
                onClick={() => addItems(item)}
                className="w-8 h-8 group rounded-full bg-logoColor flex items-center justify-center cursor-pointer"
              >
                <RiShoppingBasketFill className={`text-2xl text-white `} />
              </motion.div>
            </div>
            <div className="w-full flex flex-col gap-2 items-end justify-end">
              <p className="text-white font-semibold text-base md:text-lg">
                {item?.title}
              </p>
              <p className="mt-1 text-black text-sm">
                {item?.calories} Calories
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-white font-semibold">
                  <span className="text-sm text-white">$</span> {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col mb-12 items-center justify-center">
          <p className="text-white text-xl font-semibold my-10">
            Items Not Available
          </p>
          <img src={NotFound} alt="notFound" className="h-340" />
        </div>
      )}
    </div>
  );
};
export default RowContainer;
