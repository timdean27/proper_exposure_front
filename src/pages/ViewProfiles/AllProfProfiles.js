import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

import ViewProfileMain from "../../components/ViewProfiles/ViewProfileMain";


import { FiChevronLeft } from "react-icons/fi";



const AllProfProfiles = ({SampleProfile}) => {
  



  return (
    <div>
      <Link className="link-def1" to="/">
        <FiChevronLeft />
      </Link>
      <h3>Profiles</h3>
      <p>
        This page should have the profiels and credentials of the proffesionals
      </p>
      <ViewProfileMain SampleProfile={SampleProfile}/>
      <Routes>
      
      </Routes>
    </div>
  );
};

export default AllProfProfiles;
