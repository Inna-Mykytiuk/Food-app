import React from 'react';
import Logo from '../img/logo.png';

const Header = () => {
  return (
    <header className="fixed z-50 w-screen p-6 px-16 ">
      {/*desctop and tablet*/}
      <div className="hidden md:flex w-full h-full justify-between">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-14 object-cover" />
          <p className="text-mainColor text-lg font-bold">City</p>
        </div>
        <ul className="flex items-center gap-8">
          <li>Home</li>
          <li>Menu</li>
          <li>About us</li>
          <li>Service</li>
        </ul>
      </div>
      {/*mobile*/}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
};

export default Header;
