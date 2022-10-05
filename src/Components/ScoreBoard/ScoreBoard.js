import React from 'react';
import score1 from '../../Assets/Images/score-1.png'
import score2 from '../../Assets/Images/score-2.png'
import score3 from '../../Assets/Images/score-3.png'
import './style.scss'


const score = [{
  attandance : 10,
  points: 200,
  pendingclasses : 9
}]

export default function ScoreBoard() {
  return (
    <div className='score-board'>
      <div className='score-board-wrapper'>
        <div className='score-sec'>
          <img src={score1} alt="score1-img" />
          <ul>
            <li className='total-score'>{score[0].attandance}</li>
            <li className='total-event'>Attended Events</li>
          </ul>
        </div>
        <div className='score-sec'>
          <img src={score2} alt="score1-img" />
          <ul>
            <li className='total-score'>{score[0].points}</li>
            <li className='total-event'>Earned Ponts</li>
          </ul>
        </div>
        <div className='score-sec'>
          <img src={score1} alt="score1-img" />
          <ul>
            <li className='total-score'>{score[0].pendingclasses}</li>
            <li className='total-event'>Pending Classes</li>
          </ul>
        </div>

      </div>
    </div>
  )
}
