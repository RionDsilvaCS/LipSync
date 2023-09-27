import { useState } from "react";
import "../../Styles/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
// import {Link} from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import AuthPage from "../Pages/AuthPage";

export default function Navbar() {
    const [isOpen, setIsopen] = useState(false)
  return (
    
      <header>
        <h1>LipSync</h1>
        <nav>
          <Link smooth to="/#home" className="ab">
            Home
          </Link>
          <Link smooth to="/dashboard#dashboard" className="ab">
            Dashboard
          </Link>
          <Link smooth to="/#product" className="ab">
            Product
          </Link>
          <Link smooth to="/#about" className="ab">
            About
          </Link>
        </nav>

        <button className="login-btn" onClick={() => setIsopen(true)} >Login</button>
        <AuthPage open={isOpen} onClose={() => setIsopen(false)} />
      </header>
      
    
  );
}
