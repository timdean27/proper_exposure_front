import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="home-main-ptag">
        <p>
          This app is to help high school students get exposure to various
          professions. Concept is to create a platform that connects schools
          with local professionals to give a speech and answer questions on: How
          they got into the profession What they do day to day What steps they
          would take if they started over ext..
        </p>
      </div>
      <Link className="link-def1" to="/speachtempletes">
        Speach Templets
      </Link>
    </div>
  );
};

export default Home;
