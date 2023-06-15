import React, {useEffect} from 'react';
import { Header, CreateContainer, MainContainer } from 'components';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
// import HeroBg from './img/44.jpg';
// import HeroSecondBg from './img/bg-4.jpg';
import { useStateValue } from 'context/StateProvider';
import { getAllFoodItems } from 'utils/firebaseFunction';
import { actionType } from 'context/reducer';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const location = useLocation();

  // let backgroundImage = HeroBg;
  // if (location.pathname === '/createItem') {
  //   backgroundImage = HeroSecondBg;
  // }

  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main
          className="w-full h-full bg-center bg-mainGrey justify-center items-center"
          // style={{
          //   backgroundImage: `url(${backgroundImage})`,
          //   backgroundRepeat: 'no-repeat',
          //   backgroundSize: 'cover'
          // }}
        >
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;

//main className="mt-17 p-6 px-10 md:mt-20 md:px-16 lg:px-20 py-4 w-full h-600 md:h-800 bg-center bg-mainGrey justify-center items-center"

//className="mt-17 p-6 px-10 md:mt-20 md:px-16 lg:px-20 py-4 w-full h-full bg-center bg-mainGrey justify-center items-center"

// const App = () => {
//   // eslint-disable-next-line no-unused-vars
//   const [{ foodItems }, dispatch] = useStateValue();

//   const fetchData = async () => {
//     await getAllFoodItems().then((data) => {
//       dispatch({
//         type: actionType.SET_FOOD_ITEMS,
//         foodItems: data,
//       });
//     });
//   };

//   useEffect(() => {
//     fetchData();
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const location = useLocation();

//   let backgroundImage = HeroBg;
//   if (location.pathname === '/createItem') {
//     backgroundImage = HeroSecondBg;
//   }

//   return (
//     <AnimatePresence>
//       <div className="w-screen h-auto flex flex-col bg-primary">
//         <Header />
//         <main
//           className="w-full h-full bg-center bg-mainGrey justify-center items-center"
//           style={{
//             // backgroundImage: `url(${backgroundImage})`,
//             backgroundRepeat: 'no-repeat',
//             backgroundSize: 'cover'
//           }}
//         >
//           <Routes>
//             <Route path="/*" element={<MainContainer />} />
//             <Route path="/createItem" element={<CreateContainer />} />
//           </Routes>
//         </main>
//       </div>
//     </AnimatePresence>
//   );
// };


