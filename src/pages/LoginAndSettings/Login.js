import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FiChevronLeft } from "react-icons/fi";

import LoginComp from "../../components/LoginComp/LoginComp";

const Login = () => {
  return (
    <div>
      <Link className="back-btn" to="/">
        <FiChevronLeft />
      </Link>
      <LoginComp/>
    </div>
  );
};

export default Login;
