import React from 'react'
// import { motion } from 'framer-motion';
import { BsFillTelephoneInboundFill, BsLinkedin, BsFacebook,BsInstagram } from 'react-icons/bs';
import { MdMarkEmailRead } from 'react-icons/md';

const Footer = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">

      <section
        className="w-full p-6 px-10 mt-8 mb-8 md:px-16 lg:px-20 py-4 relative
    before:w-full before:h-[1px] before:left-0 before:top-0 before:bg-mainTextGrey before:content before:absolute
    after:w-full after:h-[1px] after:left-0 after:bottom-0 after:bg-mainTextGrey after:content after:absolute
    "
      >
        <div className="w-full flex items-center justify-center">
          <p className="text-2xl mb-12 font-semibold capitalize relative before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:-bottom-2 before:left-11 before:bg-gradient-to-br from-hoverColor to-logoColor text-mainColor transition-all ease-in-out duration-100">
            Our <span className="text-logoColor ">contacts</span>
          </p>
        </div>

        <div className='w-full flex-col flex md:flex-row items-center justify-between mb-10'>
          <div className='w-full flex items-center justify-center group cursor-pointer py-2'>
            <BsFillTelephoneInboundFill className="text-base md:text-lg text-mainColor group-hover:text-logoColor"/>
            <p className='text-base md:text-lg text-mainColor px-2 group-hover:text-logoColor'>+38 093 777 77 77 </p>
          </div>
          <div className='w-full flex items-center justify-center cursor-pointer group py-2'>
            <MdMarkEmailRead  className="text-base md:text-lg text-mainColor group-hover:text-logoColor"/>
            <p className='text-base md:text-lg text-mainColor px-2 group-hover:text-logoColor'>innka-pinnka@ukr.net</p>
          </div>
          <div className='w-full flex items-center justify-center gap-4 py-2'>
            <BsLinkedin  className="text-base md:text-lg text-mainColor hover:text-white duration-100 transition-all ease-in-out cursor-pointer hover:bg-hoverColor"/>
            <BsFacebook  className="text-base md:text-lg text-mainColor cursor-pointer"/>
            <BsInstagram  className="text-base md:text-lg text-mainColor cursor-pointer"/>
          </div>

        </div>

      </section>

    </div>
  )
}

export default Footer
