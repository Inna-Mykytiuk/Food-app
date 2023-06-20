import React, { useState } from 'react';
// import HeroBg from '../img/w5.jpg';
import { useStateValue } from 'context/StateProvider';
import { IoFastFood } from 'react-icons/io5';
import { categories } from 'utils/data';
import { motion } from 'framer-motion';
import RowContainer from './RowContainer';
import HeroBg from '../img/w5.jpg';

const MenuContainer = () => {
  const [filter, setFilter] = useState('meat');

  // eslint-disable-next-line no-unused-vars
  const [{ foodItems }, dispatch] = useStateValue();

  return (
    <section
      id='menu'
      className="w-full my-6 mb-0 p-6 px-10 md:mt-8 md:px-16 lg:px-20 py-4 drop-shadow-xl"
      style={{
        // width: '100%',
        backgroundImage: `url(${HeroBg})`,
        backgroundRepeat: 'no-repeat',

        backgroundSize: 'cover',
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold capitalize relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-br from-hoverColor to-logoColor text-white transition-all ease-in-out duration-100 mr-auto">
          Our Hot <span className="text-logoColor">Dishes</span>
        </p>

        <div className="w-full flex items-center justify-start lg:justify-center gap-8 mt-12 mb-12 overflow-x-scroll scrollbar-none">
          {categories &&
            categories.map(category => (
              <motion.div
                whileTap={{ scale: 0.75 }}
                key={category.id}
                onClick={() => setFilter(category.urlParamName)}
                className={`group ${
                  filter === category.urlParamName ? 'bg-logoColor' : 'bg-white'
                } w-24 min-w-[120px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center  hover:bg-logoColor`}
              >
                <div
                  className={`w-10 h-10 rounded-full bg-logoColor shadow-lg group-hover:bg-white flex items-center justify-center ${
                    filter === category.urlParamName
                      ? 'bg-white'
                      : 'bg-logoColor'
                  }`}
                >
                  <IoFastFood
                    className={` group-hover:text-logoColor text-xl ${
                      filter === category.urlParamName
                        ? 'text-logoColor'
                        : 'text-white'
                    }`}
                  />
                </div>
                <p
                  className={` group-hover:text-white text-base ${
                    filter === category.urlParamName
                      ? 'text-white'
                      : 'text-mainColor'
                  }`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>

        <div className="w-full">
          <RowContainer
            flag={false}
            data={foodItems?.filter(n => n.category === filter)}
          />
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
