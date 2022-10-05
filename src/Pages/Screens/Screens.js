import React, { useEffect } from 'react';
import './style.scss';
import logo from '../../Assets/Images/logo.png'
import Twitter from '../../Assets/Images/G-1.svg';
import Swiggy from '../../Assets/Images/G-2.svg';
import Instacart from '../../Assets/Images/G-5.svg';
import Adobe from '../../Assets/Images/G-3.svg';
import Google from '../../Assets/Images/G-4.svg';
import { Link, useNavigate } from 'react-router-dom';



const screen = [
    {
        "id": "001",
        "name" : "Twitter",
        "img" : Twitter
    },
    {
        "id": "002",
        "name" : "Swiggy",
        "img" : Swiggy
    },
    {
        "id": "003",
        "name" : "Instacart",
        "img" : Instacart
    },
    {
        "id": "004",
        "name" : "Adobe",
        "img" : Adobe
    },
    {
        "id": "005",
        "name" : "Google",
        "img" : Google
    },
]

export default function Screens () {
    const navigate = useNavigate();
    
    const selectScreen = (id,name) =>{
        localStorage.setItem("screen", id);
        localStorage.setItem("screenName", name);  
        navigate('/dashboard'); 

    }
    useEffect(()=>{
        debugger;
        let screen = localStorage.getItem('screenName');
        if(screen.length ){
            document.getElementById(screen).classList.add("active-screen");
        }
    },[])
   
  return (
    <div className="screens">
        <div className='screens-wrapper'>
            <img src={logo} alt="logo" />
            <h2 className='screens-heading'>Your websites for attendance</h2>
            <p>here are all channels where you are attending classes </p>
            <div className='all-screens'>
                {screen.length && screen.map((screen)=>{
                    return (
                        <div className='screen-sec'id={screen.name}>
                            <ul>
                                <li className='screen-img' onClick={()=>selectScreen(screen.id,screen.name)}><img src={screen.img} alt={screen.name} /></li> 
                                <li className='screen-name' onClick={() =>selectScreen(screen.id,screen.name)}>{screen.name}</li>
                            </ul>
                        </div>
                    )
                })}
                
            </div>
        </div>
    </div>
  )
}

const mobileScreen = () => {
    {screen.length && screen.map((screen)=>{
        return (
            <div className='screen-sec'>
                <ul>
                    <Link to="/dashboard"><li><img src={screen.img} alt={screen.name} /></li></Link>  
                    <Link to="/dashboard"><li>{screen.name}</li></Link>
                </ul>
            </div>
        )
    })}
}