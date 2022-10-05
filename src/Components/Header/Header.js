import React, { useState } from 'react'
import logo from '../../Assets/Images/logo.png';
//import useLocalStorage from 'use-local-storage';
import './style.scss';
import { Link, useNavigate } from 'react-router-dom';
import light from '../../Assets/Images/light.png';
import profile from '../../Assets/Images/profile-1.png';
import menu from '../../Assets/Images/menu.svg';
import moblogo from '../../Assets/Images/mob-logo.png';


import NavScreens from '../NavScreens/NavScreens';


export default function Header() {
  const navigate = useNavigate();

  const loggedOut = () => {
    debugger;
    localStorage.removeItem('login');
    localStorage.removeItem('screen');
    localStorage.removeItem('screenName');
    localStorage.removeItem('token');
    navigate("/")
    window.location.reload()
  }
  const openNavBar = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
      x.style.background = "#131641";
    } else {
      x.className = "topnav";
      x.style.removeProperty("background");
    }
  }
  return (
    <>
    <div className='header'>
      <div className='header-sec'>
        <div className='header-left-sec'>
          <Link to="/dashboard" ><img src={logo} alt="logo" /></Link>
        </div>
        <div className='header-right-sec'>
          <div className='nav-link'>
              <Link to="/myscoreboard"><span>My Scoreboard</span></Link>
            <Link to="/leaderboard" ><span>Leaderboard</span></Link>
          </div>
        
          <ul className='img-tabs'>
            <li><img className="theme-btn" src={light} alt="dark-light" /></li>
            <li className='profile-tab'><img className='profle-icon' src={profile} alt="Profile" />
              <div className='profile-content'>
                <NavScreens />
                <button className='btn-logout' onClick={loggedOut} >Sign out of Attandance</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className='mobile-header'>
        <div class="topnav" id="myTopnav">
          <Link to="/dashboard"><img src={moblogo} alt="mob-logo" /></Link>
          <Link class="active" to="/dashboard"><span>Home</span></Link>
          <Link to="/myscoreboard"><span>My Scoreboard</span></Link>
          <Link to="/leaderboard" ><span>Leaderboard</span></Link>
          <Link to="/screens" ><span>Switch Website</span></Link>
          <Link className='btn-logout' onClick={loggedOut} >Sign out of Attandance</Link>
          <Link class="icon" >
            <img className="theme-btn" src={light} alt="dark-light" />
            <img src={menu} onClick={openNavBar} className="menu-bar" alt="menu-bar" />
          </Link>
        </div>
    </div>
    </>
  )
}
