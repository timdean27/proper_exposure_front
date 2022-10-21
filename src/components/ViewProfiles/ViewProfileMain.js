import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ViewProfileMain = ({SampleProfile}) => {
  

  const loadedData = () => {
    return (
      <div>
        {SampleProfile.map((profile, index) => (
          <div className="Single-Profile" key={index}>
            <Link to={`/Login/Info/${profile.id}`}>
              <div className="Single-Profile-Header">
                <img
                  src={profile.profilePic}
                  alt="Sample Profile Pic"
                  className="Profile-Pic"
                ></img>
                <p>{profile.firstName}</p>
                <p>{profile.lastName}</p>
              </div>
            </Link>
            <div className="Single-Profile-Body">
              <p>Occupation: {profile.occupation}</p>
              <p>Years:{profile.yearsInField}</p>
              <p>School County:{profile.SchoolCounty}</p>
              <ul>
                Local Schools:
                {profile.SchoolsNear.map((school, index) => (
                  <li key={index}>{school}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  };

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
