import React from 'react'
import './style.scss';
// import { useState } from 'react';
// import liveVideo from './../../Assets/Images/Group-17.png';
// import icon1 from './../../Assets/Images/Group-16.png';
// import icon2 from './../../Assets/Images/Group-23.png';
// import icon3 from './../../Assets/Images/Group-24.png';
import LiveEventCard from '../../Components/LiveEventCard/LiveEventCard';
import Winners from '../../Components/Winners/Winners';
import RewardsCard from '../../Components/RewardsCard/RewardCard';
// import Footer from '../../Components/Footer/Footer';
// import Header from '../../Components/Header/Header';
// import PopupModel from '../../Components/PopupModel/PopupModel';
// import calendar from '../../Assets/Images/Group.png';
import ScoreBoard from '../../Components/ScoreBoard/ScoreBoard';
//import axios from 'axios';
import CurrentLiveEvent from '../../Components/CurrentLiveEvent/CurrentLiveEvent';

// const headers = {
//   'Content-Type': 'application/json',
// }
export default function Dashboard() {
  // const [showPopup, setshowpopup] = useState(false);
  // const[errorMsg, setErrorMsg] = useState("");

  // const submitAttandance = async () =>{
  //    debugger;
  //   const data = JSON.stringify({"token":localStorage.getItem('token'), "event_id":"6334823f3c9429a8c7f0ba8c"});
  //   try{
  //     const response = await axios.post('https://mvv1mq7v9e.execute-api.ap-south-1.amazonaws.com/dev/api/students/mark-attendance', data,{
  //     headers : headers
  //       })
  //       console.log(response);
  //       let msg = "Great! your attendance has been marked.";
  //       setErrorMsg(msg);
  //       setshowpopup(true)
  //   }catch(error){
  //     let msg = error.response.data;
  //     setErrorMsg(msg);
  //     setshowpopup(true)

  //   }
    
  
  // }
  return (
    <>
    <div className='dashboard'>
      <div className='dashboard-wrapper'>
        <CurrentLiveEvent />
        {/* <div className='banner-content'>
          <h2>Mark your attendance for <br /><span>{localStorage.getItem('screenName')}</span> live event</h2>
        </div>
        <div className='live-sec'>
        <img className='current-liv-img' src={icon3} alt="current-live-icon" />
          <div className='live-video'>
            <img src={liveVideo} alt="currentVideo" />
            <p className='live-video-text'>Mark your attendace for current<br /> live event... </p>
          </div>
          <div className='live-attandance'> 
              <img className='calender-img' src={calendar} alt="Calenderlogo" />
              {showPopup ? <><p>Great! your attendance <br />has been marked.</p>
              <button className='btn-attandance' onClick={submitAttandance}>
               Marked Attendance <img src={icon2} alt="icon" /></button></> :<>
                <p>Mark your attendace for <br />current live event</p>
              <button className='btn-attandance' onClick={submitAttandance}>
                <img src={icon1} alt="icon" />Mark Attendance</button></>}
          </div>
        </div>
           { showPopup && <PopupModel msg={errorMsg} /> } */}
        <div className='liveEvent'>
          <h2 className='liveEvent-sec-heading'>Upcoming live events</h2>
          <LiveEventCard />
        </div>
        <div className='scoreoard'>
          <h2 className='scoreoard-sec-heading'>Your scoreboard for this week</h2>
          <p>Get amazing surprises for each attended event. Get ready <br />to give fully presence!! </p>
          <ScoreBoard />
        </div>
        <div className='winners'>
          <h2 className='winners-sec-heading'>Top attenders for this week</h2>
          <Winners />
        </div>
        <div className='rewards'>
          <h2 className='rewards-sec-heading'>Top attenders for this week</h2>
          <p className='rewards-sec-content'>Get amazing surprises for each attended event. Get ready to <br />give fully presence!! </p>
          <RewardsCard />
        </div>
      </div>
    </div>
    </>
    
  )
}
