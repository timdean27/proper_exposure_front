import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FiChevronLeft } from "react-icons/fi";

import LoginComp from "../../components/LoginComp/LoginComp";

const Login = () => {
  let navigate = useNavigate();
  return (
    <div>
      <>
        <div onClick={() => navigate(-1)}>
          <FiChevronLeft />
        </div>
      </>
      <LoginComp />
    </div>
  );
};

export default Login;
