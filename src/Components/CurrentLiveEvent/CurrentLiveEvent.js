import React, { useEffect } from 'react';
import './style.scss';
import '../../Pages/Dashboard/style.scss';
import { useState } from 'react';
import liveVideo from './../../Assets/Images/Group-17.png';
import icon1 from './../../Assets/Images/Group-16.png';
import icon2 from './../../Assets/Images/Group-23.png';
import icon3 from './../../Assets/Images/Group-24.png';
import PopupModel from '../../Components/PopupModel/PopupModel';
import calendar from '../../Assets/Images/Group.png';
import axios from 'axios';



export default function CurrentLiveEvent() {
    const [showPopup, setshowpopup] = useState(false);
    const[errorMsg, setErrorMsg] = useState("");
    const[event, setEvent] = useState([]);

    useEffect(()=>{
        let headers = {
            'Content-Type': 'application/json',
            "token": localStorage.getItem('token')
        };
        axios.get('https://mvv1mq7v9e.execute-api.ap-south-1.amazonaws.com/dev/api/events/current?id=633557381115f84417a97e53', { headers })
        .then(response => setEvent(response.data)
        .catch(error => console.log(error))
        ); },[]);

    const submitAttandance = async () =>{
        let headers = {
            'Content-Type': 'application/json',
            "token":localStorage.getItem('token'),
            }
       const data = JSON.stringify({"event_id":"6334827b3c9429a8c7f0ba8e"});
       try{
            const response = await fetch('https://mvv1mq7v9e.execute-api.ap-south-1.amazonaws.com/dev/api/students/mark-attendance', 
               {
                    method:"POST",
                    body:JSON.stringify({"event_id":"6334827b3c9429a8c7f0ba8e"}),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        "token":localStorage.getItem('token'),
                    }
            })
            let msg = "Great! your attendance has been marked.";
            setErrorMsg(msg);
            setshowpopup(true)
        }catch(error){
            let msg = error.response.data;
            setErrorMsg(msg);
            setshowpopup(true)
        }
    }
    

    return (
        <div className='live-event'>
            <div className='banner-content'>
                <h2>Mark your attendance for <br /><span>{localStorage.getItem('screenName')}</span> live event</h2>
            </div>
            <div className='live-sec'>
                <img className='current-liv-img' src={icon3} alt="current-live-icon" />
                <div className='live-video'>
                    <img src={liveVideo} alt="currentVideo" />
                    <p className='live-video-text'>Mark your attendace for <span>{localStorage.getItem('screenName')}</span> live event... </p>
                </div>
                <div className='live-attandance'>
                    <img className='calender-img' src={calendar} alt="Calenderlogo" />
                    {showPopup ? <><p>Great! your attendance <br />has been marked.</p>
                        <button className='btn-attandance' onClick={submitAttandance}>
                            Marked Attendance <img src={icon2} alt="icon" /></button></> : <>
                        <p>Mark your attendace for <br />current live event</p>
                        <button className='btn-attandance' onClick={submitAttandance}>
                            <img src={icon1} alt="icon" />Mark Attendance</button></>}
                </div>
            </div>
            {showPopup && <PopupModel msg={errorMsg} />}
        </div>
    )
}
