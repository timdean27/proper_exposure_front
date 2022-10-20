import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const LocationInformation = () => {
  const [area, setArea] = useState(null);

  const handleChange = (e) => {
    setArea({ ...area, [e.target.id]: e.target.value });
    console.warn(e.target.value);
  };

  const handleSubmit = () => {};

  return (
    <div>
      LocationInformation
      <div>
        <form onSubmit={handleSubmit}>
          <input
            id="City"
            type="text"
            placeholder="City"
            onChange={handleChange}
          />
          <input
            id="County"
            type="text"
            placeholder="County"
            onChange={handleChange}
          />
          <input
            id="State"
            type="text"
            placeholder="State"
            onChange={handleChange}
          />
          <input
            id="Zip"
            type="text"
            placeholder="Zip Code"
            onChange={handleChange}
          />
        </form>
        <button onClick={handleSubmit}>Input Location Information</button>
      </div>
    </div>
  );
};

export default LocationInformation;
