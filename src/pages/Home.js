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
      {!login ? (
        <Link className="link-User-Info" to="/Login/Info">
          <MdOutlineSettingsSuggest />
        </Link>
      ) : (
        <p>Loged In</p>
      )}

      {!login ? (
        <Link className="link-Login" to="/Login">
          <IoLogInOutline />
        </Link>
      ) : (
        <p>Loged In</p>
      )}

      <Link className="link-def1" to="/speachtempletes">
        <GiNotebook />
        <p>Speach Templets</p>
      </Link>

      <Link className="link-def1" to="/profprofiles">
        <IoAccessibilitySharp/>
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
