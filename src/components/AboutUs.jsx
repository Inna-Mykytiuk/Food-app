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
      <div className="py-2 flex-1 flex flex-col items-start justify-start gap-6 mt-16 md:mt-20 xl:mt-36">
        <div className="flex items-center gap-2 justify-center bg-logoColor px-4 py-1 rounded-full">
          <p className="text-white text-center text-base font-semibold">
            Best choice
          </p>
        </div>

        <p className="lg:text-[4.0rem] text-[2.5rem] font-bold tracking-wide text-mainColor mb-[20px]">
          The Fatest Delivery in{' '}
          <span className="text-logoColor text-[3rem] lg:text-[4.5rem]">
            Your City
          </span>
        </p>

        <p className="text-base text-cardGray text-center md:text-left md:w-[80%]">
        Welcome to our food and fresh food delivery app, where we bring the ultimate convenience and speed to your dining experience. We take pride in being the go-to platform for delivering delectable meals and fresh produce straight to your doorstep, ensuring you never have to compromise on quality, taste, or time.
        Our mission is to revolutionize the way you enjoy food by offering the fastest delivery service in your city. We strive to eliminate the wait and deliver your favorite dishes and fresh ingredients to you promptly, so you can savor every bite without delay.
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
          Our commitment to speed goes hand in hand with our dedication to excellence. We have partnered with a wide network of trusted local farmers who share our vision of providing top-notch, high-quality food. But it's not just about delivering food swiftly; it's also about ensuring a seamless and delightful experience from start to finish. With just a few taps, you can place your order and eagerly await the arrival of your culinary masterpiece.
          </p>
          <br />
          <p className="text-base text-white text-center md:text-left md:w-[80%]">
            Safety is another top priority for us. We employ stringent hygiene measures throughout our delivery process to ensure your food reaches you in pristine condition. Our dedicated team of delivery drivers follows strict protocols to maintain the integrity and freshness of your order, giving you peace of mind with every bite. Join us on this exciting journey of flavor and efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
