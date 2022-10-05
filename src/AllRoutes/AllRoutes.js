
import React from 'react';
import Login from '../Pages/Login/Login';
import Otp from '../Pages/Login/Otp';
import Register from '../Pages/Register/Register';
import Dashboard from '../Pages/Dashboard';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Rewards from '../Pages/Rewards/Rewards';
import Screens from '../Pages/Screens/Screens';
import MyScoreBoard from '../Pages/MyScoreBoard/MyScoreBoard';
import LeaderBoard from '../Pages/LeaderBoard/LeaderBoard';
import ProtectedRoutes from './ProtectedRoutes';
import Header from '../Components/Header/Header';
const isAuthenticated = true;


export default function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Rewards />} />
        <Route  path="/login" element={<Login />} />
        <Route  path="/verification" element={<Otp />}/>
        <Route  path="/register" element={<Register />}/>
        <Route path="/screens" element={<ProtectedRoutes Screen={true} Component={Screens}/>} />
        <Route path="/dashboard" element={<ProtectedRoutes Component={Dashboard} />} />
        <Route path="/myscoreboard" element={<ProtectedRoutes Component={MyScoreBoard} />} />
        <Route path="/leaderboard" element={<ProtectedRoutes Component={LeaderBoard} />} /> 
      </Routes> 
    </BrowserRouter>
      
 
    
  )
}












