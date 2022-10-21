import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import Home from './pages/Home'
import SpeachTemplets from './pages/SpeachTemplets'
import AllProfProfiles from './pages/ViewProfiles/AllProfProfiles'
import UserProfileInformation from './pages/LoginAndSettings/UserProfileInformation'
import Login from './pages/LoginAndSettings/Login'
import IndividualProfile from "./components/ViewProfiles/IndividualProfile";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/speachtempletes" element={<SpeachTemplets/>}/>
      <Route path="/profprofiles" element={<AllProfProfiles/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Login/Info" element={<UserProfileInformation/>}/>
      <Route path="/Login/Info/:id" element={<IndividualProfile/>}/>
      </Routes>

    </div>
  );
}

export default App;
