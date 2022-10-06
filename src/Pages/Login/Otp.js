import React, { useEffect } from 'react';
import './style.scss';
import img from "../../Assets/Images/Saly-10.png";
import logo from "../../Assets/Images/logo.png";

import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import OTPInput, { ResendOTP } from "otp-input-react";
import axios from 'axios';



export default function Otp() {
  const location = useLocation();
  const [OTP, setOTP] = useState("");
  let navigate = useNavigate(); 

  const headers = {
    'Content-Type': 'application/json',
    'token':location.state.token,
  }
  
  const checkValidation = async () => {
    if(OTP.length>=4){
      const data = JSON.stringify({"otp" :OTP});
    const response = await axios.post('https://mvv1mq7v9e.execute-api.ap-south-1.amazonaws.com/dev/api/students/verify', data,{
      headers : headers
    })
     localStorage.setItem("token",response.data.token);
      localStorage.setItem('login', true);
        let path = "/screens";
        navigate(path);
    }else{
      console.log("nothing")
    }
    
  }
  const sendAgainOtp = async () =>{
    
    const data = JSON.stringify({"phone": location.state.mobile});
    const response = await axios.post('https://mvv1mq7v9e.execute-api.ap-south-1.amazonaws.com/dev/api/students/signup', data,{
      headers : headers
    })
    //setToken(response.data.token);
    localStorage.setItem("token", response.data.token)
  }
 
  useEffect(()=>{
    let login = localStorage.getItem('login');
    if(login){
      navigate("/dashboard");
    }
    
  })

  return (
    <div className='login-wrapper'>
    <div className="login-wrapper-content">
        <div className="login-wrapper-content-left">
            <img src={img} alt="loginPageImg" />
        </div>
        <div className="login-wrapper-content-right">
          <img src={logo} alt="logo" />
          <p className='otp-heading'>Verify Your Account</p>
          {/* {location.state.mobile = " " ? location.state.mobile : "0000000000"} */}
          <h3 className='otp-content'>We have sent a 4 digit verification code to <br />+ {location.state.mobile = " " ? location.state.mobile : "0000000000"}</h3>
          
           <div className='otp-input'>
                <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false}  />
                {/* <ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}
            </div>
          <h4 className='resend-otp'>Did’t you recevied any OTP? <Link onClick={sendAgainOtp}>Resend </Link></h4>
            <button className='login-submit' onClick={checkValidation}>Submit</button>
        </div>
    </div>
  
</div>

  )
}

