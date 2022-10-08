import React, { useEffect } from 'react';
import './style.scss';
import img from "../../Assets/Images/Saly-10.png";
import logo from "../../Assets/Images/logo.png";
import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
// import { useDispatch,useSelector } from 'react-redux';
// import{setToken} from '../../Services/Actions/Action';

const headers = {
  'Content-Type': 'application/json',
}
export default function Login(props) {
  // const reState = useSelector((state) => state.allState.theme);
  // const dispach = useDispatch();
  const [userMobile, setuserMobile] = useState("");
  const [token, setToken] = useState("")
  let navigate = useNavigate();

  const updateNumber = (e) => {
    setuserMobile(e.target.value)
  }
  const checkValidation = async () => {
    if (userMobile.length >= 9) {
      const data = JSON.stringify({ "phone": userMobile });
      const response = await axios.post('https://mvv1mq7v9e.execute-api.ap-south-1.amazonaws.com/dev/api/students/signup', data, {
        headers: headers
      })
      //console.log(response);
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      let path = "/verification";
      navigate(path, {
        state: {
          mobile: userMobile,
          token: response.data.token
        }
      });
    } else {
      console.log("nothing")
    }

  }
  useEffect(() => {
    let login = localStorage.getItem('login');
    if (login) {
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
          <p className='right-side-content'>Login or register to your account <br />and get amazing <span>reward!!</span></p>
          <div className='login-inputs'>
            <select className='country-input'>
              <option>IN</option>
              <option>USA</option>
              <option>UK</option>
              <option>UAE</option>
            </select>
            <input type="number" placeholder="Mobile Number" onChange={updateNumber}></input>
          </div>
          {/* <p className='links-cta'><Link to={"/register"}>Create an account</Link></p> */}
          <button className='login-submit' onClick={checkValidation}>Login</button>
        </div>
      </div>

    </div>

  )
}

