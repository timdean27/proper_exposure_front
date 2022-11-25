import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

const SpeachTemplets = () => {
  let navigate = useNavigate();
  const [area, setArea] = useState(null);

  const handleChange = (e) => {
    setArea({ ...area, [e.target.id]: e.target.value });
    console.warn(e.target.value);
  };

  const handleSubmit = () => {};
  return (
    <div>
      <>
        <div onClick={() => navigate(-1)}>
          <FiChevronLeft />
        </div>
      </>
      <h3>Speach Templets</h3>
      <div>
        <div>
          <h3>What occupation are you currently in?</h3>
          <form onSubmit={handleSubmit}>
            <input
              id="Occupation"
              type="text"
              placeholder="Occupation"
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>Input Occupation</button>
          </form>
          <h3>How did you get into this field?</h3>
          <form onSubmit={handleSubmit}>
            <input
              id="Field"
              type="text"
              placeholder="Field"
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>Input field information</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SpeachTemplets;
