/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { actionType } from 'context/reducer';
import { useStateValue } from 'context/StateProvider';
let items = [];

const CartItem = ({ item, setFlag, flag }) => {
  const [{ cartItems }, dispatch] = useStateValue();
  const [qty, setQty] = useState(item.qty);

  const cartDispatch = () => {
    localStorage.setItem('cartItems', JSON.stringify(items));
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
  };

  const updateQty = (action, id) => {
    if (action === 'add') {
      setQty(qty + 1);
      cartItems.map(item => {
        if (item.id === id) {
          item.qty += 1;
          setFlag(flag + 1);
        }
      });
      cartDispatch();
    } else {
      // initial state value is one so you need to check if 1 then remove it
      if (qty === 1) {
        items = cartItems.filter(item => item.id !== id);
        setFlag(flag + 1);
        cartDispatch();
      } else {
        setQty(qty - 1);
        cartItems.map(item => {
          if (item.id === id) {
            item.qty -= 1;
            setFlag(flag + 1);
          }
        });
        cartDispatch();
      }
    }
  };

  useEffect(() => {
    items = cartItems;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qty, items]);

  return (
    <div className="w-full p-1 px-2 rounded-lg bg-white flex items-center gap-2">
      <img
        src={item.imageURL}
        alt=""
        className="w-20 h-20 max-w-[60px] rounded-full object-contain"
      />

      {/* name section */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-mainTextColor">{item?.title}</p>
        <p className="text-sm block text-mainColor font-semibold">
          $ {(parseFloat(item?.price) * qty).toFixed(2)}
        </p>
      </div>

      {/*button section */}
      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty('remove', item?.id)}
        >
          <BiMinus className="text-mainColor  " />
        </motion.div>
        <p className="w-5 h-5 rounded-full bg-logoColor text-white flex items-center justify-center">
          {qty}
        </p>
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty('add', item?.id)}
        >
          <BiPlus className="text-mainColor " />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItem;

//   const updateQty = (action, id) => {
  //     if (action === "add") {
  //     setQty(qty + 1);
  //     cartItems.map((item) => {
  //     if (item.id === id) {
  //     item.qty += 1;
  //     setFlag(flag + 1);
  //     }
  //     return item; // Add return statement
  //     });
  //     cartDispatch();
  //     } else {
  //     // initial state value is one so you need to check if 1 then remove it
  //     if (qty === 1) {
  //       items = cartItems.filter((item) => item.id !== id); // Assign filtered items to a variable
  //     setFlag(flag + 1);
  //     cartDispatch();
  //     } else {
  //     setQty(qty - 1);
  //     cartItems.map((item) => {
  //     if (item.id === id) {
  //     item.qty -= 1;
  //     setFlag(flag + 1);
  //     }
  //     return item; // Add return statement
  //     });
  //     cartDispatch();
  //     }
  //   }
  // };
