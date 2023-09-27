import React from "react";
import { useState } from "react";
import closeIcon from '../../assets/close_icon.svg';

export default function AuthPage({ open, onClose }) {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const handleSubmit = () => {
        console.log(email)
        console.log(pass)
    }
  if (!open) return null;
  return (
    <React.Fragment>
      <div className="shade-back" />
      <div className="auth-pop">
        <button onClick={onClose} className="close-icon"><img src={closeIcon}/></button>
        <center>
          <p>Login</p>
        </center>
        <form onSubmit={handleSubmit}>
          <label>
            Email
            <br />
            <input type="text" name="email" onChange={(e) => {setEmail(e.target.value)}} value={email}/>
          </label>
          <br />
          <label>
            Password
            <br />
            <input type="password" name="pass" onChange={(e) => {setPass(e.target.value)}} value={pass}/>
          </label>
          <br />
          <input type="submit" value="Login" className="form-log" />
        </form>
      </div>
    </React.Fragment>
  );
}
