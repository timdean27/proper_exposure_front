import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FiChevronLeft } from "react-icons/fi";

import LocationInformation from "../../components/ProfileInformation/LocationInformation"
import About from "../../components/ProfileInformation/About"

const UserProfileInformation = () => {
  let navigate = useNavigate();
  return (
    <div>
    
      <>
        <div onClick={() => navigate(-1)}>
          <FiChevronLeft />
        </div>
      </>
      <h1>UserProfileInformation page</h1>
    <LocationInformation/>
    <About/>
    </div>
  )
}

export default UserProfileInformation