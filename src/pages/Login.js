import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FiChevronLeft } from "react-icons/fi";

const Login = () => {
  return (
    <div><Link className="link-def1" to="/">
    <FiChevronLeft />
  </Link>Login</div>
  )
}

export default Login