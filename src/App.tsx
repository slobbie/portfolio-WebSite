import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Mainlayout from './layout/Mainlayout';
import Contact from './page/Contact';
import Home from './page/Home';
import Service from './page/Service';
import Work from './page/Work';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path='/work' element={<Work />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact/*' element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
 body {
    margin: 0;
    min-height: 100vh;
    /* overflow: auto; */
    color: white;
 }
 ul,nav, section {
  margin: 0;
 }
 ul, li{
  list-style: none;
  padding: 0;
 }
 h2,h3,h4,h5,h6 {
  margin: 0;
  display: inline;
 }
 a{
  text-decoration: none;
  color: white;
 }
`;
