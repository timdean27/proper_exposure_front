import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//speach icon
import { GiNotebook } from "react-icons/gi";
//profile icon
import { IoAccessibilitySharp} from "react-icons/io5";
//login icon
import { IoLogInOutline } from "react-icons/io5";
//user information icon
import { MdOutlineSettingsSuggest} from "react-icons/md";

const Home = () => {
  const [login, setLogin] = useState(false);

  return (
    <div>
    <div className="Login-corner-container">
{/* settigns logo button*/}
      {!login ? (
        <Link className="link-User-Info" to="/Login/Info">
          <MdOutlineSettingsSuggest />
        </Link>
      ) : (
        <p>Loged In</p>
      )}
{/* login logo button*/}
      {!login ? (
        <Link className="link-Login" to="/Login">
          <IoLogInOutline />
        </Link>
      ) : (
        <p>Loged In</p>
      )}
    </div>
        <nav className="Home-Nav-Container">
      <Link className="nav-links-def1" to="/speachtempletes">
        <GiNotebook />
        <p>Speach Templets</p>
      </Link>

      <Link className="nav-links-def1" to="/profprofiles">
        <IoAccessibilitySharp/>
        <p>Profiles</p>
      </Link>
      </nav>

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
