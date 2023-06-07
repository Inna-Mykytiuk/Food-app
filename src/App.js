import React from 'react';
import { Header, CreateContainer, MainContainer } from 'components';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HeroBg from './img/44.jpg'

const App = () => {
  //initial={false}
  //md:mt-23 md:p-5
  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="mt-17 p-6 px-10 md:mt-20 md:px-16 lg:px-20 py-4 w-full h-600 md:h-800 bg-center bg-mainGrey justify-center items-center" style={{backgroundImage: `url(${HeroBg}`,backgroundRepeat:"no-repeat", backgroundSize: "cover"}}>
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
