import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

import ViewProfileMain from "../../components/ViewProfiles/ViewProfileMain";
import IndividualProfile from "./IndividualProfile";

import { FiChevronLeft } from "react-icons/fi";



const AllProfProfiles = () => {
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
      <Link className="back-btn" to="/">
        <FiChevronLeft />
      </Link>
      <h3>Profiles</h3>
      <p>
        This page should have the profiels and credentials of the proffesionals
      </p>
      <ViewProfileMain SampleProfile={SampleProfile}/>
    </div>
  );
};

export default AllProfProfiles;
