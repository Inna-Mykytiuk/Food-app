import React from 'react';
import HeroBg from '../img/bg-3.jpg';

const AboutUs = () => {
  // useEffect(() => {
  //   // Set overflow to hidden when the component mounts
  //   document.body.style.overflow = 'hidden';

  //   // Cleanup: set overflow back to default when the component unmounts
  //   return () => {
  //     document.body.style.overflow = 'visible';
  //   };
  // }, []);
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-2 w-full min-h-screen h-auto mt-17 md:mt-[30px] p-6 px-10 md:px-16 lg:px-20 py-4 drop-shadow-xl scroll-x-none"
      id="home"
      style={{
        // width: '100%',
        backgroundImage: `url(${HeroBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-start gap-6 mt-4 md:mt-20">
        <div className="flex items-center gap-2 justify-center bg-logoColor px-4 py-1 rounded-full">
          <p className="text-white text-center text-base font-semibold">
            Best choice
          </p>
        </div>

        <p className="lg:text-[4.0rem] text-[2.5rem] font-bold tracking-wide text-mainColor mb-[20px] md:mb-[30px]">
          The Fatest Delivery in{' '}
          <span className="text-logoColor text-[3rem] lg:text-[4.5rem]">
            Your City
          </span>
        </p>

        <p className="text-base text-cardGray text-center md:text-left md:w-[80%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
          praesentium at temporibus mollitia quas qui numquam, adipisci commodi.
          Laudantium autem vero corporis quae. Impedit tempore quos blanditiis
          odio ullam error?
        </p>
        <p className="text-base text-cardGray text-center md:text-left md:w-[80%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
          praesentium at temporibus mollitia quas qui numquam, adipisci commodi.
          Laudantium autem vero corporis quae. Impedit tempore quos blanditiis
          odio ullam error?
        </p>
        <p className="text-base text-cardGray text-center md:text-left md:w-[80%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
          praesentium at temporibus mollitia quas qui numquam, adipisci commodi.
          Laudantium autem vero corporis quae. Impedit tempore quos blanditiis
          odio ullam error?
        </p>
      </div>

      <div className="py-2 md:py-12 flex-1 flex items-center lg:justify-center relative">
        <div
          className="p-2 md:p-6 bg-white w-full flex flex-col items-center justify-center
          md:w-510 rounded-2xl "
          style={{
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(90, 72, 72, 0.3)',
            boxShadow: 'rgba(0, 0, 0, 0.5) 0px 5px 15px',
          }}
        >
          <p className="text-base text-white text-center md:text-left md:w-[80%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
            praesentium at temporibus mollitia quas qui numquam, adipisci
            commodi. Laudantium autem vero corporis quae. Impedit tempore quos
            blanditiis odio ullam error?
          </p>
          <br />
          <p className="text-base text-white text-center md:text-left md:w-[80%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
            praesentium at temporibus mollitia quas qui numquam, adipisci
            commodi. Laudantium autem vero corporis quae. Impedit tempore quos
            blanditiis odio ullam error?
          </p>
          <br />
          <p className="text-base text-white text-center md:text-left md:w-[80%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
            praesentium at temporibus mollitia quas qui numquam, adipisci
            commodi. Laudantium autem vero corporis quae. Impedit tempore quos
            blanditiis odio ullam error?
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
