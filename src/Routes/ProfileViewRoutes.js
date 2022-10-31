import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import AllProfProfiles from "../pages/ViewProfiles/AllProfProfiles";
import IndividualProfile from "../pages/ViewProfiles/IndividualProfile";
const ProfileViewRoutes = () => {

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
    <div>
      <Routes>
        <Route path="/profprofiles" element={<AllProfProfiles  SampleProfile={SampleProfile}/>} />
        <Route path="/profprofiles/:id" element={<IndividualProfile SampleProfile={SampleProfile}/>}/>
      </Routes>
    </div>
  );
};

export default ProfileViewRoutes;