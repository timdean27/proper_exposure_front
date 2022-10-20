import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FiChevronLeft } from "react-icons/fi";

import LocationInformation from "../components/Login/LocationInformation"
import About from "../components/Login/About"

const UserLoginInfo = () => {
  return (
    <div>
    <Link className="link-def1" to="/">
        <FiChevronLeft />
      </Link>
    <LocationInformation/>
    <About/>
    </div>
  )
}

export default UserLoginInfo