import React from 'react';
import { Header, CreateContainer, MainContainer } from 'components';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  //initial={false}
  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="mt-23 p-8 w-full bg-mainGrey md:mt-24 md:p-8 ">
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
