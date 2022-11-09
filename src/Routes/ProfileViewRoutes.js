import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import AllProfProfiles from "../pages/ViewProfiles/AllProfProfiles";
import IndividualProfile from "../pages/ViewProfiles/IndividualProfile";
const ProfileViewRoutes = ({SampleProfile}) => {
   

  return (
    <div>
      <Routes>
        <Route path="/profprofiles" element={<AllProfProfiles  SampleProfile={SampleProfile}/>} />
        <Route path="/profprofiles/:id" element={<IndividualProfile SampleProfile={SampleProfile}/>}/>
      </Routes>
    </div>
  );
};

export default ProfileViewRoutes;