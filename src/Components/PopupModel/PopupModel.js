import React from 'react';
import { useState,useEffect } from 'react';
import Success from '../../Assets/Images/Group-33.png';
import failure from '../../Assets/Images/Group-31.png';
import { useNavigate, Link } from "react-router-dom";

import './style.scss';


export default function PopupModel(props) {
   
    const[showpopup, setshowpopup] = useState(true);
    const navigate = useNavigate();
    const closePopup = () => {
    setshowpopup(!showpopup);
    props.path ? navigate("/"+props.path) :console.log("nothing")
}
useEffect(() => {
    const timer = setTimeout(() => {
        setshowpopup(!showpopup);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
       showpopup && <div className='model'>
           <div className='model-content'>
               <img src={props.errorFlag === "true" ? Success : failure} />
                <h2 className='model-msg'>{props.msg} </h2>
                <button onClick={closePopup}>Close</button>
           </div>
        </div>
  )
}

