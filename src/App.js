import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/home/Home';
import Error from './pages/error/Error404';
import Contact from './pages/contact/Contact';


function App() {
  return (
    <>
      <NavBar name='nav'/>
     <Routes>
        <Route index element={<Navigate to='/home' />} />
        <Route path='/home' element={ <Home /> } />
        <Route path='/error' element={ <Error /> } />
        <Route path='*' element={ <Error/>} />
        <Route path='/contact' element={ <Contact/> }/>  
      </Routes> 

      <Footer/>
    </>
  );
}

export default App;
