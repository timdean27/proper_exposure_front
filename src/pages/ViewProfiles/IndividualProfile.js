import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

const IndividualProfile = ({ SampleProfile }) => {
  console.log(SampleProfile[0].id);
  const { id } = useParams();
  console.log(id);
  let showProfile = SampleProfile.find((profile) => profile.id == id);
  console.log("showProfile", showProfile);

  const [editIndividualProfile, setIndividualProfile] = useState(showProfile);

  const loadedMarketing = () => {
    return (
      <div key={showProfile.id}>
        <Link className="back-btn" to="/profprofiles">
          <FiChevronLeft />
        </Link>

        <div className="Single-Profile-Header">
          <img
            src={showProfile.profilePic}
            alt="Sample Profile Pic"
            className="Profile-Pic"
          ></img>
          <p>{showProfile.firstName}</p>
          <p>{showProfile.lastName}</p>
        </div>

        <div className="Single-Profile-Body">
          <p>Occupation: {showProfile.occupation}</p>
          <p>Years:{showProfile.yearsInField}</p>
          <p>School County:{showProfile.SchoolCounty}</p>
          <ul>
            Local Schools:
            {showProfile.SchoolsNear.map((school, index) => (
              <li key={index}>{school}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  const loadingMarketing = () => {
    return <h1>Loading.........</h1>;
  };

  return (
    <div>
      <h1>What What</h1>
      <div>{showProfile ? loadedMarketing() : loadingMarketing()}</div>
    </div>
  );
};

export default IndividualProfile;
