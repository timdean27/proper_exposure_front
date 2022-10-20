import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import Home from './pages/Home'
import SpeachTemplets from './pages/SpeachTemplets'
import ProfProfiles from './pages/ProfProfiles'
import UserProfileInformation from './pages/UserProfileInformation'
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/speachtempletes" element={<SpeachTemplets/>}/>
      <Route path="/profprofiles" element={<ProfProfiles/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Login/Info" element={<UserProfileInformation/>}/>
      </Routes>

    </div>
  );
}

export default App;
