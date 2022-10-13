import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
const ProfProfiles = () => {
  return (
    <div>
      <Link className="link-def1" to="/">
        <FiChevronLeft />
      </Link>
      <h3>Profiles</h3>
      <p>
        This page should have the profiels and credentials of the proffesionals
      </p>
    </div>
  );
};

export default ProfProfiles;
