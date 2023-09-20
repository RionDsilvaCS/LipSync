import { useRef } from "react";
import "../Styles/navbar.css"
import { FaBars, FaTimes } from "react-icons/fa";
// import {Link} from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
    
    return (
        
        <header>
            <h1>LipSync</h1>
            <nav>
                <Link smooth to="/main#home" className="ab">Home</Link>
                <Link smooth to="/dashboard#dashboard" className="ab">Dashboard</Link>
                <Link smooth to="/main#product" className="ab">Product</Link>
                <Link smooth to="/main#about" className="ab">About</Link>
            </nav>

            <button className="login-btn">Login</button>
        </header>
        

    );
}
