import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePageProfs = ({SampleProfile}) => {
    const loadedData = () => {
        return (
          <div>
            {SampleProfile.map((profile, index) => (
              <div key={index}>
                <Link to={`/profprofiles/${profile.id}`}>
                  <div className="HomePage-Profile">
                    <img
                      src={profile.profilePic}
                      alt="Sample Profile Pic"
                      className="Profile-Pic"
                    ></img>
                    <p>{profile.firstName}</p>
                    <p>{profile.lastName}</p>
                    <p>Occupation: {profile.occupation}</p>
                  </div>
                </Link>
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
}

export default HomePageProfs