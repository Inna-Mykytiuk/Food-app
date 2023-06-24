import React from 'react';
import { motion } from 'framer-motion';
import Delivery from '../img/delivery.png';
import { heroData } from '../utils/data';

import HeroBg from '../img/44.jpg';

const HomeContainer = () => {
  return (
    <section
      className=" w-full md:min-h-screen h-auto drop-shadow-xl"
      id="home"
      style={{
        backgroundImage: `url(${HeroBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="flex flex-col w-full h-full items-center justify-between px-4 md:px-0 max-w-7xl mx-auto">
        <div className="w-full md:min-h-screen h-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-2 p-6 px-10 mt-20 md:px-16 py-4 ">
          <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
            <div className="flex items-center gap-2 justify-center bg-logoColor px-4 py-1 rounded-full">
              <p className="text-white text-center text-base font-semibold">
                Bike Delivery
              </p>
              <div className="w-8 h-8 bg-logoColor rounded-full overflow-hidden drop-shadow-md">
                <img
                  src={Delivery}
                  className="w-full h-full object-contain bg-white"
                  alt="delivery"
                />
              </div>
            </div>

            <p className="lg:text-[4rem] text-[2rem] font-bold tracking-wide text-white">
              The Fatest Delivery in{' '}
              <span className="text-logoColor text-[3rem] lg:text-[4.75rem]">
                Your City
              </span>
            </p>

            <p className="text-base text-mainTextGrey text-center md:text-left md:w-[80%]">
              Experience the fastest delivery in your city with City, where
              great food meets unparalleled convenience. Your satisfaction is
              our utmost priority, and we look forward to serving you with our
              passion for exceptional food and service.
            </p>

            <button
              type="button"
              className="md:w-auto sm:w-auto  bg-gradient-to-br from-hoverColor to-logoColor w-full py-2 px-4 rounded-lg text-base text-white transition-all ease-in-out duration-300"
              onMouseOver={e => (e.target.style.boxShadow = '0 2px 6px 0 grey')}
              onMouseOut={e => (e.target.style.boxShadow = '')}
            >
              Order Now
            </button>
          </div>
          <div className="py-2 md:py-12 flex-1 flex items-center lg:justify-center relative">
            {/* <img src={PosterBg} alt="hero-Bg" className='rounded-2xl'/> */}
            <div
              className="ml-auto h-420  lg:h-600 bg-white w-full
          md:w-510 rounded-2xl "
              style={{
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(90, 72, 72, 0.3)',
                boxShadow: 'rgba(0, 0, 0, 0.5) 0px 5px 15px',
              }}
            ></div>
            <div
              className=" h-370 lg:h-600 absolute flex top-4  left-0 items-center justify-center
        md:top-[180px]
        xl:top-[180px]

        py-2 gap-2 md:gap-4 flex-wrap  "
            >
              {heroData &&
                heroData.map(n => (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    key={n.id}
                    className=" xl:w-190 w-120 sm:w-150 p-[3px] md:p-4 bg-itemBg rounded-3xl flex flex-col items-center justify-center mt-8 md:mt-10 lg:mt-0 text-center"
                    style={{
                      backdropFilter: 'blur(10px)',
                      // backgroundColor: 'rgba(90, 72, 72, 0.8)',
                      boxShadow: 'rgba(0, 0, 0, 0.5) 0px 5px 15px',
                    }}
                  >
                    <img
                      src={n.imageSrc}
                      alt="icecreame1"
                      className="w-24 md:w-40 -mt-10 md:-mt-20 xl:w-[180px]"
                    />
                    <p className="text-base lg:text-xl font-semibold text-white mt-1 lg:mt-4">
                      {n.name}
                    </p>
                    <p className="text-[11px] md:text-[14px]  text-mainTextGrey my-1 lg:my-4">
                      {n.description}
                    </p>
                    <p className="text-sm font-semibold text-white">
                      {n.price}
                    </p>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
