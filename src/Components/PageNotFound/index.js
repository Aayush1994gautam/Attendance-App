import React from 'react'
import './style.scss';
import img from "../../Assets/Images/Saly-10.png";
import { Link } from 'react-router-dom';




export default function index() {
  return (
    <div className='pagenotfound'>
        <img src={img} alt="loginPageImg" />
        <h2>404 Page not found</h2>

        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/dashboard"><li>Dashboard</li></Link>
        </ul>
    </div>
  )
}
