import React from 'react';
import { useState } from 'react';
import './style.scss';


export default function PopupModel(props) {
    const[showpopup, setshowpopup] = useState(true);

const closePopup = () => {
    setshowpopup(!showpopup);
}
  return (
       showpopup && <div className='model'>
           <div className='model-content'>
                <h2 className='model-msg'>{props.msg} </h2>
                <button onClick={closePopup}>Close</button>
           </div>
        </div>
  )
}

