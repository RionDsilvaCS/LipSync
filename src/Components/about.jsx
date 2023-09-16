import React from 'react';
import "../Styles/about.css"

function About (){
    return (
        <div className='page ' id='about'>
                <center><h1 className='page-title '>How was <text className='hero-line'>LipSync</text> Built ?</h1></center>
            
                <div className='about-content-box'>
                        <div className='details'>
                            <div className='story bor-pro'>
                                <p className='sub-title'>Story behind LipSync</p>
                                <p className='body-text'>Create a new account using your email and a dashboard will be visible now, tap that buddy.</p>
                            </div>
                            <div className='dev-name bor-pro'>
                                <p className='sub-title'>Rion Sebastian Dsilva </p>
                                <p className='body-text'>3rd year student pursuing Computer Science Engineering, Vellore Institute of Technology - Andhra Pradesh.</p>
                            </div>
                        </div>
                        <div className='tech bor-pro'>
                            <p className='sub-title'>Tech Stack</p>
                        </div>
                    </div>
                
        </div>
    );
}
  
export default About;