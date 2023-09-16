import React from 'react';
import "../Styles/home.css"

function Home (){
    return (
        <>
            <div className='gradeint' id='home'>
                <div className='cont'>
                    <h1 className='hero-line'>Unlocking Silent<br/>
                        Conversations 
                    </h1>
                    <p className='below-hero-line'>Where Words Find Their<br/>
                    Voice in Silence</p>
                    <a href='/#' className='start-btn'>Start free</a>
                </div>   
            </div> 
        </>
    );
}
  
export default Home;