import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const [user, setUser] = useState(null);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
    console.warn(e.target.value);
  };

  const handleSubmit = () => {};

  return (
    <div>
      About You
      <div>
        <form onSubmit={handleSubmit}>
          <input
            id="FirstName"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
          />
          <input
            id="LastName"
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
          />
          <input
            id="Occupation"
            type="text"
            placeholder="Occupation"
            onChange={handleChange}
          />
          <input
            id="FieldYears"
            type="text"
            placeholder="Years in Field"
            onChange={handleChange}
          />
        </form>
        <button onClick={handleSubmit}>Input About You</button>
      </div>
    </div>
  );
};

export default About;
