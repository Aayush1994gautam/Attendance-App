import React, {useEffect,useState} from 'react';
import axios from 'axios';
import './style.scss';


const liveEvents = [
    {
        "subject": "Chemistry",
        "topic": "Chemical Bonding | Lec 06",
        "time": "15 Sept, 10:15 am",
        "teacherName": "Rajesh Sir"
      },
      {
        "subject": "Physics",
        "topic": "Current electricity | Lec 02",
        "time": "16 Sept, 10:15 am",
        "teacherName": "Mahesh Sir"
      },
      {
        "subject": "Mathematics",
        "topic": "Linear equations | Lec 08",
        "time": "17 Sept, 10:15 am",
        "teacherName": "Suresh Sir"
      },
      {
        "subject": "Physics",
        "topic": "Current electricity | Lec 02",
        "time": "16 Sept, 10:15 am",
        "teacherName": "Mahesh Sir"
      },
      {
        "subject": "Mathematics",
        "topic": "Linear equations | Lec 08",
        "time": "17 Sept, 10:15 am",
        "teacherName": "Suresh Sir"
      }

]
export default function LiveEventCard() {

  const [upcomingEvent, setUpcomingEvent] = useState([]);
    
  useEffect(() => {
      const headers = {
        "accepts":"application/json",   
         "token":localStorage.getItem('token')
      };
       axios.get('https://mvv1mq7v9e.execute-api.ap-south-1.amazonaws.com/dev/api/events/upcoming?id=633557381115f84417a97e53', { headers })
      .then(response => setUpcomingEvent(response.data)
      .catch(error => console.log(error))
      );
  },[]);

  return (
    <div className='live-slider'>
        {
            liveEvents.map((event) => {
                return ( <div className='event-card slide'>
                            <span className='subject'>{event.subject}</span>
                            <span className='topic'>{event.topic}</span>
                            <span className='time'>{event.time}</span>
                        </div>
                )
            })
        }
       
    </div>
  )
}
