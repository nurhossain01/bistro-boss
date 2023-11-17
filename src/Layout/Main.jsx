import React from 'react';
import Home from '../Pages/Home/Home/Home';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Main;