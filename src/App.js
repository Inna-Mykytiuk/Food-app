import React, {useEffect} from 'react';
import { Header, CreateContainer, MainContainer, AboutUs, Footer } from 'components';

import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

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


  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main
          className="w-full h-full bg-center bg-white justify-center items-center"
        >
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/aboutUs" element={<AboutUs/>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default App;



