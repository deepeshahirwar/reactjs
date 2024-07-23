import React from "react";
import { Route, Routes } from 'react-router-dom'; 

import About from './components/About'; 
import Contact from './components/Contact'; 
import Blog from './components/Blog';
import './index.css';

function App() {
  return (
    <>  
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
