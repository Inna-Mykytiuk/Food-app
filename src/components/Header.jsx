import React from 'react';
import { RiShoppingBasketFill } from 'react-icons/ri';
import { motion } from 'framer-motion';

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// import { app } from 'firebase.config';
import { app } from '../firebase.config';
import { useStateValue } from 'context/StateProvider';
import { actionType } from 'context/reducer';

import Logo from '../img/logo.png';
import Avatar from '../img/avatar.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();

  //user: { refreshToken, providerData },

  const login = async () => {
    const {
      user: { providerData },
    } = await signInWithPopup(firebaseAuth, provider);
    dispatch({
      type: actionType.SET_USER,
      user: providerData[0],
    });
    localStorage.setItem('user', JSON.stringify(providerData[0]));
  };
  return (
    <header className="fixed z-50 w-screen p-4 px-16 shadow-lg bg-headerBgColor">
      {/*desctop and tablet*/}
      <div className="hidden md:flex w-full h-full items-center justify-between ">
        <Link to={'/'} className="flex items-center gap-2 drop-shadow-lg">
          <img src={Logo} alt="logo" className="w-14 object-cover" />
          <p className="text-mainColor text-lg font-bold">City</p>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-mainColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-base text-mainColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base text-mainColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About us
            </li>
            <li className="text-base text-mainColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
          </ul>
          <div className="relative flex items-center justify-center">
            <RiShoppingBasketFill className="text-mainColor text-2xl cursor-pointer" />
            <div className="absolute -top-3 -right-3 flex items-center justify-center w-5 h-5 rounded-full bg-logoColor">
              <p className="text-white text-center text-xs font-semibold">0</p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.7 }}
              src={user ? user.photoURL : Avatar}
              alt="avatar"
              className="w-10 min-w-[40px] h-10  min-h-[40px] rounded-full drop-shadow-md cursor-pointer"
              onClick={login}
            />
          </div>
        </div>
      </div>
      {/*mobile*/}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
};

export default Header;
