import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginComp = () => {
  const [userName, setuserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [tempPassword, setTempPassword] = useState(null);


  const handleSubmit = (e) => {
    if(e.target.id == userName){
    setuserName({ ...userName, [e.target.id]: e.target.value });
    }
    else if(e.target.id == email){
      setEmail({ ...email, [e.target.id]: e.target.value });
      }
      else if(e.target.id == tempPassword){
        setTempPassword({ ...tempPassword, [e.target.id]: e.target.value });
        }
  };

  return (
    <div>
LOG IN PAGE
      <div>
        <form onSubmit={handleSubmit}>
          <input
            id="userName"
            type="text"
            placeholder="User Name"

          />
          <input
            id="Email"
            type="text"
            placeholder="Email"

          />
          <input
            id="Temp Password"
            type="text"
            placeholder="Temp Password"

          />

        </form>
        <button onClick={handleSubmit}>Enter</button>
      </div>
    </div>
  );
}

export default LoginComp