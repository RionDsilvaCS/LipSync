import React, { Component } from 'react';
import Navbar from './Components/NavBar';
import Home from './Components/home';
import Product from './Components/product';
import Steps from './Components/steps';
import About from './Components/about'
import Foot from './Components/footer';
import './App.css';
import {Route, Routes} from "react-router-dom"


function App(){
    return (
        <>
        <Navbar />
        {/* <div>
            <Routes>
                <Route path='#home' element={<Home />} />
                <Route path='#product' element={<Product />} />
                <Route path='#about' element={<About />} />
            </Routes>
        </div> */}
        <Home/>
        <Product/>
        <Steps/>
        <About/>
        <Foot/>
        </>
    
    );

}
  
export default App;