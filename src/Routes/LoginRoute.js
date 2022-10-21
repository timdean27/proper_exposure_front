import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import UserProfileInformation from "../pages/LoginAndSettings/UserProfileInformation";
import Login from "../pages/LoginAndSettings/Login";

const LoginRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Login/Info" element={<UserProfileInformation />} />
      </Routes>
    </div>
  );
};

export default LoginRoute;
