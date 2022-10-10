import React, { useEffect, useState } from 'react'
import logoDark from '../../Assets/Images/logo.png';
import logoLight from '../../Assets/Images/Group-29.png';
import './style.scss';
import { Link, useNavigate } from 'react-router-dom';
import light from '../../Assets/Images/Group-25.png';
import dark from '../../Assets/Images/Group-27.png';
import profileLight from '../../Assets/Images/profile-1.png';
import profileDark from '../../Assets/Images/Group-28.png';
import menulight from '../../Assets/Images/Group-26.png';
import menudark from '../../Assets/Images/menu.svg';
import moblogo from '../../Assets/Images/mob-logo.png';
import NavScreens from '../NavScreens/NavScreens';
import { useDispatch,useSelector } from 'react-redux';
import {setTheme} from '../../Services/Actions/Action';



export default function Header() {
  const navigate = useNavigate();
  const [lightTheme, setLightTheme] = useState(false);
  const dispach = useDispatch();
  const getTheme = useSelector((state) => state.allState.theme);


  const updateTheme = () => {
    if(getTheme === "Light"){
      dispach(setTheme("Dark"));
    }else{
      dispach(setTheme("Light"));
    }
    setLightTheme(!lightTheme);
    localStorage.setItem('themeName', lightTheme ? "Dark": "Light");
  }


  const loggedOut = () => {
    localStorage.removeItem('login');
    localStorage.removeItem('screen');
    localStorage.removeItem('screenName');
    localStorage.removeItem('token');
    closePopus();
    navigate('/')
    //window.location.reload()
  }
  const closePopus = ()=>{
    var x = document.getElementById("myTopnav");
    x.className = "topnav";
    x.style.removeProperty("background");
  }
  const openNavBar = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav light-topnav" || x.className === "topnav dark-topnav"  ) {
      x.className += lightTheme ? " responsive light-res":" responsive dark-res";
      //x.style.background = "#fff";
    } else {
      x.className = lightTheme ? "topnav light-topnav" : "topnav light-topnav" ;
      x.style.removeProperty("background");
    }
  }
  const redirectPage = e => {
   
    let links = document.getElementsByClassName(" activeLink");
    if(links.length >0){
      links[0].classList.remove("activeLink");
    }
   let ele = document.getElementById(e.target.id);
    ele.className += " activeLink";
  }
  const checkActiveLink = () => {
    let links = document.getElementsByClassName(" activeLink");
    if(links.length >0){
      links[0].classList.remove("activeLink");
    }else{
      console.log("")
    }
  }
  return (
    <>
    <div className='header'>
      <div className='header-sec'>
        <div className='header-left-sec'>
          <Link to="/dashboard" ><img onClick={checkActiveLink}src={lightTheme?logoLight:logoDark } alt="logo" /></Link>
        </div>
        <div className='header-right-sec'>
          <div id="links" className={lightTheme ? "nav-link-light" :"nav-link-dark" }>
              <Link to="/myscoreboard"><span id="myscoreboard" onClick={e => redirectPage(e)}>My Scoreboard</span></Link>
              <Link to="/leaderboard"><span id="leaderboard"   onClick={e => redirectPage(e)}>Leaderboard</span></Link>
          </div>
        
          <ul className='img-tabs'>
            <li><img className="theme-btn" onClick={updateTheme} src={lightTheme ? dark : light} alt="dark-light" /></li>
            <li className='profile-tab'><img className='profle-icon' src={lightTheme ? profileDark : profileLight} alt="Profile" />
              <div className='profile-content'>
                <NavScreens theme={lightTheme} />
                <button className='btn-logout' onClick={loggedOut} >Sign out of Attandance</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className='mobile-header'>
        <img className="theme-btn" onClick={updateTheme} src={lightTheme ? dark : light} alt="dark-light" />
        <div class={lightTheme ? "topnav dark-topnav" : "topnav light-topnav" } id="myTopnav">
            <Link to="/dashboard"><img src={lightTheme?logoLight:logoDark} alt="mob-logo" className="mob-logo" /></Link>
            <Link onClick={closePopus} class="active" to="/dashboard"><span>Home</span></Link>
            <Link onClick={closePopus} to="/myscoreboard"><span>My Scoreboard</span></Link>
            <Link onClick={closePopus} to="/leaderboard" ><span>Leaderboard</span></Link>
            <Link onClick={closePopus} to="/screens" ><span>Switch Website</span></Link>
            <Link  className='btn-logout' onClick={loggedOut} >Sign out of Attandance</Link>
            <Link class="icon" >
              <img src={lightTheme ? menudark :menulight} onClick={openNavBar} className="menu-bar" alt="menu-bar" />
            </Link>
        </div>
    </div>
    </>
  )
}
