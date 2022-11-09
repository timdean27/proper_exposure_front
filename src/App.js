import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';


import Header from './components/Header'
import HomeRoute from "./Routes/HomeRoute"
import LoginRoute from "./Routes/LoginRoute"
import ProfileViewRoutes from "./Routes/ProfileViewRoutes"
import SearchTempRoutes from "./Routes/SearchTempRoutes"





function App() {
  const SampleProfile = [
    {
      id:1,
      profilePic: "ProfilePicHolder.jpg",
      firstName: "Tim",
      lastName: "Dean",
      occupation: "Software Engineer",
      yearsInField: 1,
      SchoolCounty: "Suffolk",
      SchoolsNear: ["Northport HS", "Commack HS"],
    },
    {
      id:2,
      profilePic: "ProfilePicHolder.jpg",
      firstName: "Tom",
      lastName: "Dean",
      occupation: "Mechanical Engineer",
      yearsInField: 1,
      SchoolCounty: "Nassau",
      SchoolsNear: ["Northport HS", "Commack HS"],
    },
  ];



  return (
    <div className="App">
      <Header/>
      <HomeRoute SampleProfile={SampleProfile}/>
      <LoginRoute />
      <ProfileViewRoutes SampleProfile={SampleProfile}/>
      <SearchTempRoutes/>
    </div>
  );
}

export default App;
