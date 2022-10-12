import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SpeachTemplets = () => {
  return (
    <div>
        <Link className="link-def1" to="/">Back Home</Link>
      <h3>Speach Templets</h3>
      <p>This page should have templates for what the professional will discuss</p>
    </div>
  );
};

export default SpeachTemplets;
