import React from 'react';
import Twitter from '../../Assets/Images/Group-1.png';
import Swiggy from '../../Assets/Images/Group-2.png';
import Instacart from '../../Assets/Images/Group-3.png';
import Adobe from '../../Assets/Images/Group-6.png';
import Google from '../../Assets/Images/Group-5.png';
import icon from '../../Assets/Images/icon-5.png'
import { Link } from 'react-router-dom';
import './style.scss';

const screen = [
    {
        "id": "001",
        "name": "Twitter",
        "img": Twitter
    },
    {
        "id": "002",
        "name": "Swiggy",
        "img": Swiggy
    },
    {
        "id": "003",
        "name": "Instacart",
        "img": Instacart
    },
    {
        "id": "004",
        "name": "Adobe",
        "img": Adobe
    },
    {
        "id": "005",
        "name": "Google",
        "img": Google
    },
]

export default function NavScreens() {
    return (
        <div className='mon-screen-sec'>
            {screen.length && screen.map((screen) => {
                return (
                    <ul>
                        <Link to="/screens"><li><img src={screen.img} alt={screen.name} /></li></Link>
                        <Link to="/screens"><li className='screen-name'>{screen.name}</li></Link>
                    </ul>

                )
            })}
            <Link to="/screens"><span >View all Websites</span><img className='icon-5' src={icon} alt="" /></Link>
        </div>

    )
}
