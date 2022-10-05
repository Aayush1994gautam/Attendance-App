import React, { useEffect } from 'react'
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom';


export default function ProtectedRoutes(props) {
    const navigate = useNavigate();
    const {Component, Screen} = props;
    //const {Screen} = props;

    useEffect(()=>{
        // let login = localStorage.getItem('login');
        // if(!login){
        //     navigate('/login');
        // }
    })
  return (
      <div>
          {Screen ? <Component /> : <> 
          <Header />
            <Component />
          <Footer />
          </>
         
          
  }
      </div>
    
  )
}
