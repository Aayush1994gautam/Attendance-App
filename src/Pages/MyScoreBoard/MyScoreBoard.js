import React,{useEffect,useState} from 'react'
import './style.scss';
import { Link } from 'react-router-dom';
import Calendar from '../../Assets/Images/Group-7.png';
import matchers from '@testing-library/jest-dom/matchers';
import lacImage from '../../Assets/Images/liveimg.png';
import attendend from '../../Assets/Images/Group-8.png';
import { useSelector} from 'react-redux';

const totalLactures = [
  {
    "event": "01",
    "image": lacImage,
    "subject": "Maths",
    "topic": "Building Blocks: Architecture, Branching, and Contributions by Figma",
    "time": "16 Sept, 10:am",
    "attendance": true
  },
  {
    "event": "02",
    "image": lacImage,
    "subject": "Chamistry",
    "topic": "Building Blocks: Architecture, Branching, and Contributions by Figma",
    "time": "17 Sept, 10:am",
    "attendance": true
  },
  {
    "event": "03",
    "image": lacImage,
    "subject": "Physics",
    "topic": "Building Blocks: Architecture, Branching, and Contributions by Figma",
    "time": "18 Sept, 10:am",
    "attendance": true
  },
  {
    "event": "04",
    "image": lacImage,
    "subject": "Hindi",
    "topic": "Building Blocks: Architecture, Branching, and Contributions by Figma",
    "time": "22 Sept, 10:am",
    "attendance": true
  },
  {
    "event": "05",
    "image": lacImage,
    "subject": "English",
    "topic": "Building Blocks: Architecture, Branching, and Contributions by Figma",
    "time": "24 Sept, 10:am",
    "attendance": true
  }

]
export default function ScoreBoard() {
  const [theme, setTheme] = useState(useSelector((state) => state.allState.theme));
  const reState = useSelector((state) => state.allState.theme);
  

 useEffect(()=>{
   setTheme(reState);
 },);

  return (
    <div className={theme === "Light" ? "myscoreboard dark-myscoreboard" : "myscoreboard light-myscoreboard"}>
      <div className='myscoreboard-wrapper'>
        <h2 className='myscoreboard-heading'>Your Scoreboard for <span>Instacart</span></h2>
        <p>Get amazing surprises for each attended event. Get ready <br />to give fully presence!! </p>

        <div className='attandance-sec'>
          <div className='attandance-filter'>
            <div className='top-filters'>
              <li>Current Event</li>
              <li>All Event</li>
              <li><img src={Calendar} alt="calendar" />12-17 Oct</li>
            </div>
            <div className='gotoscreen'>
              <span><Link to="/screens">Check other website event</Link></span>
            </div>
          </div>
          <span className='attendance-txt'>Here is your current live class attandace</span>
          {totalLactures.length && totalLactures.map((totalLacture) => {
            return <div className='attan-card'>
              <div className='lact-num'><p>{totalLacture.event}</p><p className='event-txt'>EVENT</p></div>
              <div className='lact-details'>
                <img src={totalLacture.image} alt="lacture img" />
                <h5><span>{totalLacture.topic}</span><br /><span>{totalLacture.time}</span></h5>
              </div>
              <div className='lact-attan'>
                <span>{totalLacture.attendance ? <p className='attended-txt'><img className='attended-img' src={attendend} alt="attendend" />Attended!</p> : <span>Not Attended!</span>}</span>
              </div>
            </div>
          })}
          <div className='score-total'>
            <p className='score-total-txt'>Congrats! You attended 3 classes out of 7. Be ready for<br /> next and get amzing reward!</p>
            <span>View upcoming events</span>
          </div>
        </div>

      </div>
    </div>
  )
}
