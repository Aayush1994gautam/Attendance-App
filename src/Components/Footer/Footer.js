import React,{useEffect,useState} from 'react'
import './style.scss';
import twitter from './../../Assets/Images/Vector (1).png'
import facebook from './../../Assets/Images/Vector (2).png'
import link from './../../Assets/Images/Vector (3).png'
import insta from './../../Assets/Images/Vector (4).png';
import logoDark from '../../Assets/Images/logo.png';
import logoLight from '../../Assets/Images/Group-29.png';

import { useSelector} from 'react-redux';



export default function Footer() {
  const [theme, setTheme] = useState(useSelector((state) => state.allState.theme));
  const reState = useSelector((state) => state.allState.theme);
  

 useEffect(()=>{
   setTheme(reState);
 },);
  return (
    <div className={theme === "Light" ?'footer dark-footer':'footer light-footer'}>
       <img src={theme ==="Light"? logoDark :  logoLight } alt="logo-footer" />
        <ul>
            <li>Home</li>
            <li>Service</li>
            <li>Resource</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
        <p className='footer-content'>Framer’s canvas is incredible for web design. Create web pages with <br />text, links, media, and animations—no code needed. Ready to ship?<br /> Publish your site with a single click.</p>

        <ul>
            <li><img src={twitter} alt=""/></li>
            <li><img src={facebook} alt="" /></li>
            <li><img src={link} alt="" /></li>
            <li><img src={insta} alt="" /></li>
        </ul>
    </div>
  )
}
