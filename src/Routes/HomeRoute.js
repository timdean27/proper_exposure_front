import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

const HomeRoute = ({SampleProfile}) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home  SampleProfile={SampleProfile}/>} />
      </Routes>
      
    </div>
  );
};

export default HomeRoute;