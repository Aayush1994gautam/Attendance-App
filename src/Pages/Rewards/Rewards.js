import React from 'react'
import Winners from '../../Components/Winners/Winners';
import './style.scss';
import { useNavigate } from "react-router-dom";
import logo from '../../Assets/Images/logo.png';


export default function Rewards(props) {
    let navigate = useNavigate();

    const letsStart = () => {
        let path = "/login";
        navigate(path);
    }
  return (
    <div className='reward-page'>
        <div className='reward-page-wrapper'>
           
            <div className='nav'>
            <img src={logo} alt="logo" />
                <span><button onClick={letsStart}>Lets get started</button></span>
            </div>
            <h1>Mark your <span>attendance</span> and <br />get amazing reward!!</h1>

            <div className='filters'>
                <div className='right-side'>
                    <button>Top Winners</button>
                    <button>Previous winners</button>
                </div>
                <div className='left-side'>
                    <button>Rewards for this week</button>
                </div>
            </div>
            <Winners />
        </div>
    </div>
  )
}
