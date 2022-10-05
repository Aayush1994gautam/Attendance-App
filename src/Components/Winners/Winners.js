import React, { useEffect, useState } from 'react';
import './style.scss';
import ProfileImg from './../../Assets/Images/profile.png'
import axios from 'axios';
const winners = [
    {
        "rank" : 1,
        "profile": "",
        "name" : "Soniya Gupta",
        "totalTime" :"750 mins  •  7 days streak",
        "totalPoints" : "1000"
    },
    {
        "rank" : 2,
        "profile": "",
        "name" : "Shruti Sharma",
        "totalTime" :"650 mins  •  6 days streak",
        "totalPoints" : "900"
    },
    {
        "rank" : 3,
        "profile": "",
        "name" : "Sudeep Sharama",
        "totalTime" :"550 mins  •  6 days streak",
        "totalPoints" : "850"
    },
    {
        "rank" : 4,
        "profile": "",
        "name" : "Anita Jain",
        "totalTime" :"500 mins  •  6 days streak",
        "totalPoints" : "800"
    },
    {
        "rank" : 5,
        "profile": "",
        "name" : "Soniya Gupta",
        "totalTime" :"450 mins  •  5 days streak",
        "totalPoints" : "700"
    },
    {
        "rank" : 6,
        "profile": "",
        "name" : "Shruti Sharma",
        "totalTime" :"650 mins  •  6 days streak",
        "totalPoints" : "900"
    },
    {
        "rank" : 7,
        "profile": "",
        "name" : "Sudeep Sharama",
        "totalTime" :"550 mins  •  6 days streak",
        "totalPoints" : "850"
    },
    {
        "rank" : 8,
        "profile": "",
        "name" : "Anita Jain",
        "totalTime" :"500 mins  •  6 days streak",
        "totalPoints" : "800"
    },
]

export default function Winners() {
    const [newwinners, setNewWinners] = useState([]);
    
    useEffect(() => {
        //debugger;
        const headers = {
            'Content-Type': 'application/json',
        };
        let data = JSON.stringify({  "date":"2022-09-22T20:26:11.443+00:00",'token':localStorage.getItem('token')})
         axios.post('https://mvv1mq7v9e.execute-api.ap-south-1.amazonaws.com/dev/api/students/top-attenders',data, { headers })
        .then(response => setNewWinners(response.data)
        );
    },[]);
  return (
    <div className='winners'>
        {
          winners.length &&  winners.map((winner)=> {
                return(
                    <div className='winner-card'>
                        <span className='rank'>#{winner.rank}</span>
                        <img src={ProfileImg} alt="profileImg" />
                        <span className='name'>{winner.name}</span>
                        <span className='time'>{winner.totalTime}</span>
                        <button className='total-points'>{winner.totalPoints} Points</button>
                    </div>
                    )
            })
        }
       
    </div>
  )
}
