import Webcam from "react-webcam";
import { useEffect } from "react";
import "./web.css";
import downloadIcon from "./assets/download_icon.svg"
import settingsIcon from "./assets/settings_icon.svg"
import playIcon from "./assets/play_icon.svg"

// const URL= `https://sentiment-analysis-api-8fa5.onrender.com/`;

function WebCamera() {

    // useEffect(() => {
    //     async function fetchData () {
    //         const result = await fetch(URL)
    //         console.log(result)
    //     }
    //     fetchData();
    // },[]);

    return (
        <div>
            
            <div className="cam-win">
                {/* <Webcam /> */}
                <span>
                
                <div className="pos-bottom">
                    <button className="cam-btn"><img src={playIcon}/></button>
                    <button className="cam-btn"><img src={downloadIcon}/></button>
                    <button className="cam-btn"><img src={settingsIcon}/></button>
                </div>
                <div className="video-win">
                <video></video>
                </div>
                </span>
                
                
                
            </div>
            <div className="output-box">
                <textarea></textarea>
            </div>
        </div>
    );
}

export default WebCamera;