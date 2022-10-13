import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcNook } from "react-icons/fc";
import { FcApprove } from "react-icons/fc";
const Home = () => {
  return (
    <div>
      <Link className="link-def1" to="/speachtempletes">
        <FcNook />
        <p>Speach Templets</p>
      </Link>

      <Link className="link-def1" to="/profprofiles">
        <FcApprove />
        <p>Profiles</p>
      </Link>

      <div className="home-main-ptag">
        <p>
          This app is to help high school students get exposure to various
          professions. Concept is to create a platform that connects schools
          with local professionals to give a speech and answer questions on:
        </p>
        <p>How they got into the profession?</p>
        <p>What they do day to day?</p>
        <p>What steps they would take if they started over ext..</p>
      </div>
    </div>
  );
};

export default Home;
