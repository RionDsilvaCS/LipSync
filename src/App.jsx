import React, { Component } from 'react';
import Navbar from './Components/NavBar';
import Home from './Components/home';
import Product from './Components/product';
import Steps from './Components/steps';
import About from './Components/about'
import Foot from './Components/footer';
import Dash from './Components/dashboard';
import './App.css';
import {Route, Routes} from "react-router-dom"


function App(){
    return (
        <>
        <Navbar />
        <div>
            <Routes>
                <Route path='/main' element={
                    <>
                    <Home />
                    <Product/>
                    <Steps/>
                    <About/>
                    
                    </>
                } />
                <Route path='/dashboard' element={<Dash />} />
 
            </Routes>
        </div>
        <Foot/>
        {/* <Home/>
        <Product/>
        <Steps/>
        <About/>
        <Foot/> */}
        </>
    
    );

}
  
export default App;