import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { RiRefreshFill } from 'react-icons/ri';

import { actionType } from 'context/reducer';
import { useStateValue } from 'context/StateProvider';
import EmptyCart from '../img/emptyCart.svg';
import CartItem from './CartItem';

import { motion } from 'framer-motion';

const CartContainer = () => {
  const [{ cartShow, cartItems, user }, dispatch] = useStateValue();
  const [flag, setFlag] = useState(1);
  const [tot, setTot] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [checkoutMessage, setCheckoutMessage] = useState('');

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  useEffect(() => {
    let totalPrice = cartItems.reduce(function (accumulator, item) {
      return accumulator + item.qty * item.price;
    }, 0);
    setTot(totalPrice);
    if (cartItems.length === 0) {
      setTot(0);
    }
    // console.log(tot);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tot, flag, cartItems]);

  const clearCart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: [],
    });

    localStorage.setItem('cartItems', JSON.stringify([]));
  };

  const handleCheckout = () => {
    clearCart();
    setCheckoutMessage('Thank you for your order!');
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]"
    >
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }} onClick={showCart}>
          <MdOutlineKeyboardBackspace className="text-mainColor text-3xl" />
        </motion.div>
        <p className="text-mainColor text-lg font-semibold">Cart</p>
        <motion.p
          whileTap={{ scale: 0.75 }}
          onClick={clearCart}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-mainColor text-base"
        >
          Clear <RiRefreshFill />{' '}
        </motion.p>
      </div>

      {/* bottom section */}
      {cartItems && cartItems.length > 0 ? (
        <div className="w-full h-full bg-purple-100 rounded-t-[2rem] flex flex-col justify-between items-center">
          {/* cart Item section */}
          <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
            {/* cart Item */}
            {cartItems &&
              cartItems.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                  setFlag={setFlag}
                  flag={flag}
                />
              ))}
          </div>

          {/* cart total section */}
          <div className="w-full flex-1 bg-white rounded-t-[2rem] flex flex-col items-center  p-8 gap-6">
            <div className="w-full flex items-center justify-between">
              <p className="text-mainColor text-lg">Sub Total</p>
              <p className="text-mainColor text-lg">$ {tot.toFixed(2)}</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="text-mainTextColor text-lg">Delivery</p>
              <p className="text-mainTextColor text-lg">$ 2.5</p>
            </div>

            <div className="w-full border-b border-mainColor my-2"></div>

            <div className="w-full flex items-center justify-between">
              <p className="text-logoColor text-xl font-semibold">Total</p>
              <p className="text-logoColor text-xl font-semibold">
                $ {(tot + 2.5).toFixed(2)}
              </p>
            </div>

            {user ? (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                onClick={handleCheckout}
                className="w-full p-2 rounded-full  bg-logoColor text-gray-50 text-lg my-2 hover:shadow-lg"
              >
                Check Out
              </motion.button>
            ) : (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                onClick={handleCheckout}
                className="w-full p-2 rounded-full  bg-logoColor text-gray-50 text-lg my-2 hover:shadow-lg"
              >
                Login to check out
              </motion.button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <img src={EmptyCart} className="w-300" alt="" />
          {checkoutMessage ? (
            <p className="text-xl text-logoColor font-semibold">
              {checkoutMessage}
            </p>
          ) : (
            <p className="text-xl text-logoColor font-semibold">
              Add some items to your cart
            </p>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default CartContainer;
