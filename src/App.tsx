import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mainlayout from './layout/Mainlayout';
import Contact from './page/Contact';
import Home from './page/Home';
import Service from './page/Service';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path='service' element={<Service />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
