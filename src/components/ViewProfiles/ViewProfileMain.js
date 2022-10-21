import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ViewProfileMain = () => {
  const SampleProfile = [
    {
      profilePic:
        "ProfilePicHolder.jpg",
      firstName: "Tim",
      lastName: "Dean",
      occupation: "Software Engineer",
      yearsInField: 1,
    },
    {
        profilePic:
          "ProfilePicHolder.jpg",
        firstName: "Tom",
        lastName: "Dean",
        occupation: "Mechanical Engineer",
        yearsInField: 1,
      },
  ];

  const loadedData = () => {
    return (
      <div>
        {SampleProfile.map((profile, index) => (
          <div className="Single-Profile" key={index}>
            <img src={profile.profilePic} alt="Sample Profile Pic" className="Profile-Pic"></img>
            <p>{profile.firstName}</p>
            <p>{profile.lastName}</p>
            <p>{profile.occupation}</p>
            <p>{profile.yearsInField}</p>
          </div>
        ))}
      </div>
    )
  }

  const loadingData = () => {
    return <h3>Awaiting Data</h3>;
  };

  return (
    <div>
      <div>{!SampleProfile ? loadingData() : loadedData()}</div>
    </div>
  );
};

export default ViewProfileMain;
