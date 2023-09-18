import React from 'react';
import "../Styles/home.css"

function Home (){
    return (
        <>
            <div className='gradeint' id='home'>
                <div className='home-back-grad-left'/>
                <div className='cont'>
                    <h1 className='hero-line'>Unlocking Silent<br/>
                        Conversations 
                    </h1>
                    <p className='below-hero-line'>Where Words Find Their<br/>
                    Voice in Silence</p>
                    <button className='start-btn'>Start free</button>
                </div>  
                <div className='home-back-grad-right'/> 
            </div> 
        </>
    );
}
  
export default Home;