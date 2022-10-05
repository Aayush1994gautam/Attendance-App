import React from 'react'
import './style.scss';
import noise from "./../../Assets/Images/Group-21.png"
import zomato from "./../../Assets/Images/Zomato_logo 1.png"
import amazon from "./../../Assets/Images/Ellipse 53 (1).png"
import oyo from "./../../Assets/Images/Ellipse 53 (2).png"
import { useEffect, useState } from 'react';
import axios from 'axios';


const rewards = [
    {
        "image" : noise,
        "brand" : "Noise",
        "product" : "Smart Watch",
        "points" : 1000
    },
    {
        "image" : zomato,
        "brand" : "Zomato",
        "product" : "Get 50% Off",
        "points" : 1000
    },
    {
        "image" : amazon,
        "brand" : "Amazon",
        "product" : "Get 50% Off",
        "points" : 1000
    },
    {
        "image" : oyo,
        "brand" : "Oyo",
        "product" : "Get 60% Off",
        "points" : 1000
    },
    {
        "image" : noise,
        "brand" : "Noise",
        "product" : "Smart Watch",
        "points" : 1000
    },
    {
        "image" : zomato,
        "brand" : "Zomato",
        "product" : "Get 50% Off",
        "points" : 1000
    },
    {
        "image" : amazon,
        "brand" : "Amazon",
        "product" : "Get 50% Off",
        "points" : 1000
    },
    {
        "image" : oyo,
        "brand" : "Oyo",
        "product" : "Get 60% Off",
        "points" : 1000
    }

]


export default function RewardCard() {
    const [allRewards, setAllRewards] = useState([]);
    
    useEffect(() => {
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
         axios.get('https://mvv1mq7v9e.execute-api.ap-south-1.amazonaws.com/dev/api/rewards', { headers })
        .then(response => setAllRewards(response.data));
    },[]);

  return (
    <div className='reward'>
        {
            rewards.map((reward) => {
                return(
                    <div className='reward-card'>
                        <img src={reward.image} alt="noise" />
                        <span className='brand'>{reward.brand}</span>
                        <span className='product'>{reward.product}</span>
                        <button className='reward-btn'>{reward.points} Points</button>
                    </div>
                )
            })
        }
    </div>
  )
}
