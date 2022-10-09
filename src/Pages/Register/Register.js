import React, { useEffect } from 'react';
import './style.scss';
import img from "../../Assets/Images/Saly-10.png";
import logo from "../../Assets/Images/logo.png";
import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import PopupModel from '../../Components/PopupModel/PopupModel';


export default function Register(props) {
  const [showPopup, setshowpopup] = useState(false);
  const[userName, setuserName] = useState("");
  const[userDOB, setuserDOB] = useState("");
  const[userEmail, setuserEmail] = useState("");

  let navigate = useNavigate(); 

  const nameChange = (e) =>{
    setuserName(e.target.value)
  }
  const updateDOB = (e) =>{
    setuserDOB(e.target.value)
  }
  const updateEmail = (e) =>{
    setuserEmail(e.target.value)
  }
  const headers = {
    'token': localStorage.getItem('token'),
    "Content-Type": "application/json",
  }
 

  const checkValidation = async () => {
    try{
      if(true){
        const data = JSON.stringify({'email':"ayush@gmail.com", "dob" :"2022-09-22T00:00:00.000", });
        const response = await axios.post('https://mvv1mq7v9e.execute-api.ap-south-1.amazonaws.com/dev/api/student', data,{
          headers : headers
        })
         localStorage.setItem("token",response.data.token);
          localStorage.setItem('login', true);
          if(response.data.student.email){
            let path = "/screens";
            navigate(path);
          }else{
            navigate("/register");
          }
           
        }else{
          console.log("nothing")
        }
  
      let path = "/screens";
      navigate(path);
    }catch{
      setshowpopup(true);
      // let path = "/screen";
      // navigate(path);
      
    
    }
    
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
            <input type="text" placeholder="Enter Your FullName" onChange={nameChange} />
            <input type="date" placeholder="DOB" onChange={updateDOB}></input>
            <input type="text" placeholder="Email" onChange={updateEmail}></input>
        </div>
            {/* <p className='links-cta'><Link to={"/login"}>Have account already?</Link></p> */}
            <button className='register-submit' onClick={checkValidation}>Register</button>
        </div>
    </div>
    {showPopup && <PopupModel path="screens" errorFlag="false" msg="Server Error" />}
</div>

  )
}

