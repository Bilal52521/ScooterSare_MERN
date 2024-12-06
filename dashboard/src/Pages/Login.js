import React, { useState } from "react";
import "../Styles/Login.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [addUser, setAddUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8570/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addUser),
      });

      const data = await response.json();

      console.log(data);

      if (data.success) {
        console.log("User Login successfully!");
        setAddUser({
          password: "",
          email: "",
        });
        navigate("/Dashboard");
      } else {
        console.log("Error:", data.message);
      }
    } catch (error) {
      console.log("Fetching error:", error);
    }
  };

  const handleEvent = (e) => {
    setAddUser({ ...addUser, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={addUser.email}
            onChange={handleEvent}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={addUser.password}
            onChange={handleEvent}
          />
        </div>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
