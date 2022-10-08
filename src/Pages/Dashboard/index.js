import React, { useEffect , useState} from 'react'
import './style.scss';
import LiveEventCard from '../../Components/LiveEventCard/LiveEventCard';
import Winners from '../../Components/Winners/Winners';
import RewardsCard from '../../Components/RewardsCard/RewardCard';
import ScoreBoard from '../../Components/ScoreBoard/ScoreBoard';
import CurrentLiveEvent from '../../Components/CurrentLiveEvent/CurrentLiveEvent';
import { useSelector ,useDispatch} from 'react-redux';

export default function Dashboard(props) {
  const [theme, setTheme] = useState(useSelector((state) => state.allState.theme));
   const reState = useSelector((state) => state.allState.theme);
   

  useEffect(()=>{
    setTheme(reState);
  },);

  return (
    <>
    <div className={theme === "Light" ? "dashboard" :"dashboard dark"}>
      <div className='dashboard-wrapper'>
        <CurrentLiveEvent />
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
