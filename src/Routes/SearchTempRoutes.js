import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import SpeachTemplets from "../pages/SpeachTemplets";

const SearchTempRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/speachtempletes" element={<SpeachTemplets />} />
      </Routes>
    </div>
  );
};

export default SearchTempRoutes;
