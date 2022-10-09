import React,{useEffect,useState} from 'react'
import './style.scss';
import { Link } from 'react-router-dom';
import Calendar from '../../Assets/Images/Group-7.png';
import fillicon from '../../Assets/Images/Group-11.png';
import profile1 from '../../Assets/Images/Group-12.png';
import profile2 from '../../Assets/Images/Group-13.png';
import profile3 from '../../Assets/Images/Group-14.png';
import brand1 from '../../Assets/Images/Zomato.png';
import brand2 from '../../Assets/Images/Amazon.png';
import brand3 from '../../Assets/Images/Noise.png';
import { useSelector} from 'react-redux';





const leadersboard = [
    {
        "rank" : '1',
        "image": profile1,
        "name": "Shuruti Thakur",
        "time": "750 mins  •  7 days streak",
        "brand": brand1,
        "discount" :"40%"
    },
    {
        "rank" : '2',
        "image": profile2,
        "name": "Shuruti Thakur",
        "time": "750 mins  •  7 days streak",
        "brand": brand2,
        "discount" :"80%"
    },
    {
        "rank" : '3',
        "image": profile3,
        "name": "Shuruti Thakur",
        "time": "750 mins  •  7 days streak",
        "brand": brand3,
        "discount" :"50%"
    },
    {
        "rank" : '4',
        "image": profile1,
        "name": "Shuruti Thakur",
        "time": "750 mins  •  7 days streak",
        "brand": brand1,
        "discount" :"60%"
    },
    {
        "rank" : '5',
        "image": profile2,
        "name": "Shuruti Thakur",
        "time": "750 mins  •  7 days streak",
        "brand": brand2,
        "discount" :"50%"
    }
]

export default function LeaderBoard() {
 
  const [theme, setTheme] = useState(useSelector((state) => state.allState.theme));
  const reState = useSelector((state) => state.allState.theme);
  

 useEffect(()=>{
   setTheme(reState);
 },);
  return (
    <div className={theme === "Light" ? "leaderboard dark-leaderboard" : "leaderboard light-leaderboard"}>
        <div className='leaderboard-wrapper'>
            <h2 className='leaderboard-heading'>Top attenders who have earned<br /> amazing<span> rewards!</span></h2>
        
        <div className='leaderboard-sec'>
          <div className='leaderboard-filter'>
            <div className='top-filters'>
              <li>Top Winner</li>
              <li>Previous winner</li>
              <li><img src={Calendar} alt="calendar" />12-18 Oct</li>
            </div>
            <div className='gotoscreen'>
              <span><Link to="/screens"><img src={fillicon} alt="filter icon" />Rewards for this week</Link></span>
            </div>
            
          </div>
          <p className='attendance-txt'>Here are top 50 attedners from 12 oct to 18 oct, who<br /> has earned amzing rewards  </p>

          {leadersboard.length && leadersboard.map((leaderboard)=>{
              return <div className='attan-card'>
              <div className='lact-num'><p className='event-txt'>#{leaderboard.rank}</p></div>
              <div className='lact-details'>
                <img src={leaderboard.image} alt="lacture img" />
                <h5><span>{leaderboard.name}</span><br /><span>{leaderboard.time}</span></h5>
              </div>
              <div className='lact-attan'>
              <img className='attended-img' src={leaderboard.brand} alt="attendend" />
              <p className='attended-txt'>Won free <span> {leaderboard.discount}</span> of Zomato coupon code!</p>
                {/* <span>{leaderboard.attendance ? <p className='attended-txt'><img className='attended-img' src={attendend} alt="attendend" />Attended!</p> : <span>Not Attended!</span>}</span> */}
              </div>
            </div>
          })}
    </div>
    </div>
    </div>
  )
}
