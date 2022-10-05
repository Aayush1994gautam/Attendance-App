import React from 'react';
import './style.scss';
import img from "../../Assets/Images/Saly-10.png";
import logo from "../../Assets/Images/logo.png";
import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";


export default function Register(props) {

  const[userName, setuserName] = useState("");
  const[userMobile, setuserMobile] = useState("");
  const[userEmail, setuserEmail] = useState("");

  let navigate = useNavigate(); 

  const nameChange = (e) =>{
    setuserName(e.target.value)
  }
  const updateNumber = (e) =>{
    setuserMobile(e.target.value)
  }
  const updateEmail = (e) =>{
    setuserEmail(e.target.value)
  }
  const checkValidation = () => {
    let path = "/verification";
    navigate(path,{state:{mobile:userMobile}});
  }


  return (
    <div className='register-wrapper'>
    <div className="register-wrapper-content">
        <div className="register-wrapper-content-left">
            <img src={img} alt="registerPageImg" />
        </div>
        <div className="register-wrapper-content-right">
        <img src={logo} alt="logo-img" />

          <p className='right-side-content'>Register to your account and <br />get amazing <span>reward!!</span></p>
          <div className='register-inputs'>
            <input type="text" placeholder="Enter your name" onChange={nameChange} />
            <input type="number" placeholder="Mobile Number" onChange={updateNumber}></input>
            <input type="text" placeholder="Email" onChange={updateEmail}></input>
        </div>
            <p className='links-cta'><Link to={"/login"}>Have account already?</Link></p>
            <button className='register-submit' onClick={checkValidation}>Register</button>
        </div>
    </div>
  
</div>

  )
}

