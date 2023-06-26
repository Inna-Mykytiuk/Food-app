import React, { useState } from 'react';
import { RiShoppingBasketFill } from 'react-icons/ri';
import { MdAdd, MdLogout } from 'react-icons/md';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Link as ReactLink } from 'react-scroll';

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../firebase.config';
import { useStateValue } from 'context/StateProvider';
import { actionType } from 'context/reducer';

import Logo from '../img/logo.png';
import Avatar from '../img/avatar.png';

const Header = () => {
  const location = useLocation();
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  //user: { refreshToken, providerData },

  const login = async () => {
    if (!user) {
      const {
        // eslint-disable-next-line no-unused-vars
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem('user', JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <header
      className="fixed z-50 w-screen p-3 px-10  md:px-16 lg:px-20 shadow-lg bg-headerBgColor"
      style={{ boxShadow: '0 2px 6px 0 grey' }}
    >
      {/*desctop and tablet*/}
      <div className="hidden md:flex w-full h-full items-center justify-between px-4 md:px-0 max-w-6xl mx-auto">
        <Link to={'/'} className="flex items-center gap-2 drop-shadow-lg">
          <img src={Logo} alt="logo" className="w-14 object-cover" />
          <p className="text-mainColor text-lg font-bold">City</p>
        </Link>

        <div className="flex items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8"
          >
            <Link
              to={'/'}
              className="text-base text-mainColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
            >
              Home
            </Link>
            <Link
              to={'/aboutUs'}
              className="text-base text-mainColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
            >
              About us
            </Link>
            {location.pathname !== '/aboutUs' &&
              location.pathname !== '/createItem' && (
                <ReactLink
                  to="menu"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={300}
                  className="text-base text-mainColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
                >
                  Menu
                </ReactLink>
              )}
          </motion.div>

          <div
            className="relative flex items-center justify-center"
            onClick={showCart}
          >
            <RiShoppingBasketFill className="text-mainColor text-2xl cursor-pointer" />
            {cartItems && cartItems.length > 0 && (
              <div className="absolute -top-3 -right-3 flex items-center justify-center w-5 h-5 rounded-full bg-logoColor">
                <p className="text-white text-center text-xs font-semibold">
                  {cartItems.length}
                </p>
              </div>
            )}
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.7 }}
              src={user ? user.photoURL : Avatar}
              alt="avatar"
              className="w-10 min-w-[40px] h-10  min-h-[40px] rounded-full drop-shadow-md cursor-pointer"
              onClick={login}
            />

            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-violet-50 shadow-xl rounded-lg flex-column  absolute  top-12 right-0"
              >
                {user && user.email === 'project.topdoma@gmail.com' && (
                  <Link to={'/createItem'}>
                    <p
                      className="text-mainTextColor px-4 py-2 flex items-center cursor-pointer hover:bg-hoverColor hover:text-white transition-all duration-100 ease-in-out text-base"
                      onClick={() => setIsMenu(false)}
                    >
                      <MdAdd className="mr-4" />
                      New Item
                    </p>
                  </Link>
                )}
                <p
                  className="text-mainTextColor px-4 py-2 flex items-center cursor-pointer hover:bg-hoverColor hover:text-white transition-all duration-100 ease-in-out text-base "
                  onClick={logout}
                >
                  <MdLogout className="mr-4" /> Log out
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/*mobile*/}
      <div className="flex md:hidden w-full h-full justify-between items-center">
        <div
          className="relative flex items-center justify-center"
          onClick={showCart}
        >
          <RiShoppingBasketFill className="text-mainColor text-2xl cursor-pointer" />
          {cartItems && cartItems.length > 0 && (
            <div className="absolute -top-3 -right-3 flex items-center justify-center w-5 h-5 rounded-full bg-logoColor">
              <p className="text-white text-center text-xs font-semibold">
                {cartItems.length}
              </p>
            </div>
          )}
        </div>

        <Link to={'/'} className="flex items-center gap-2 drop-shadow-lg">
          <img src={Logo} alt="logo" className="w-14 object-cover" />
          <p className="text-mainColor text-lg font-bold">City</p>
        </Link>

        <div className="relative  ">
          <motion.img
            whileTap={{ scale: 0.7 }}
            src={user ? user.photoURL : Avatar}
            alt="avatar"
            className="w-10 min-w-[40px] h-10  min-h-[40px] rounded-full drop-shadow-md cursor-pointer"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-violet-50 shadow-xl rounded-lg flex-column  absolute  top-12 right-0"
            >
              {user && user.email === 'project.topdoma@gmail.com' && (
                <Link to={'/createItem'}>
                  <p
                    className="text-mainTextColor px-4 py-2 flex items-center cursor-pointer hover:bg-hoverColor hover:text-white transition-all duration-100 ease-in-out text-base justify-center"
                    onClick={() => setIsMenu(false)}
                  >
                    <MdAdd />
                    New Item
                  </p>
                </Link>
              )}
              <div className="flex flex-col">
                <Link
                  to={'/'}
                  className="text-base text-mainColor px-4 py-2 hover:text-white duration-100 transition-all ease-in-out cursor-pointer hover:bg-hoverColor"
                  onClick={() => setIsMenu(false)}
                >
                  Home
                </Link>
                <Link
                  to={'/aboutUs'}
                  className="text-base text-mainColor px-4 py-2 hover:text-white duration-100 transition-all ease-in-out cursor-pointer hover:bg-hoverColor"
                  onClick={() => setIsMenu(false)}
                >
                  About us
                </Link>
                {location.pathname !== '/aboutUs' &&
                  location.pathname !== '/createItem' && (
                    <ReactLink
                      to="menu"
                      spy={true}
                      smooth={true}
                      offset={-30}
                      duration={300}
                      className="text-base text-mainColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
                    >
                      Menu
                    </ReactLink>
                  )}
              </div>
              <p
                className="text-mainTextColor rounded-md shadow-md m-2 p-2 flex items-center justify-center bg-gray-200 cursor-pointer hover:bg-hoverColor hover:text-white transition-all duration-100 ease-in-out text-base"
                onClick={logout}
              >
                <MdLogout /> Log out
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
