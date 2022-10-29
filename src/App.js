import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";

import Header from './components/Header'
import HomeRoute from "./Routes/HomeRoute"
import LoginRoute from "./Routes/LoginRoute"
import ProfileViewRoutes from "./Routes/ProfileViewRoutes"
import SearchTempRoutes from "./Routes/SearchTempRoutes"





function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <HomeRoute/>
      <LoginRoute/>
      <ProfileViewRoutes/>
      <SearchTempRoutes/>
      </Router>
    </div>
  );
}

export default App;
