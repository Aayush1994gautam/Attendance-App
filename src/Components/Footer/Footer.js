import React from 'react'
import './style.scss';
import twitter from './../../Assets/Images/Vector (1).png'
import facebook from './../../Assets/Images/Vector (2).png'
import link from './../../Assets/Images/Vector (3).png'
import insta from './../../Assets/Images/Vector (4).png';
import logo from '../../Assets/Images/logo.png';




export default function Footer() {
  return (
    <div className='footer'>
       <img src={logo} alt="logo-footer" />
        <ul>
            <li>Home</li>
            <li>Service</li>
            <li>Resource</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
        <p className='footer-content'>Framer’s canvas is incredible for web design. Create web pages with <br />text, links, media, and animations—no code needed. Ready to ship?<br /> Publish your site with a single click.</p>

        <ul>
            <li><img src={twitter} /></li>
            <li><img src={facebook} /></li>
            <li><img src={link} /></li>
            <li><img src={insta} /></li>
        </ul>
    </div>
  )
}
