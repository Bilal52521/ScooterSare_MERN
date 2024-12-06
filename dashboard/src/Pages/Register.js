import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Register.css'; // Import the CSS file

const Register = () => {
  const navigate = useNavigate();

  const [addUser, setAddUser] = useState({
    name: '',
    password: '',
    email: '',
    location: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    try {
      const response = await fetch('http://localhost:8570/api/adduser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(addUser),
      });

      const data = await response.json();

      console.log(data);

      if (data.success) {
        console.log('Account created successfully!');
        setAddUser({
          name: '',
          password: '',
          email: '',
          location: ''
        });
        navigate('/Dashboard');
      } else {
        console.log('Error:', data.message);
      }
    } catch (error) {
      console.log('Fetching error:', error);
    }
  };

  const handleEvent = (e) => {
    setAddUser({ ...addUser, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-containerr">
      <form onSubmit={handleSubmit} className="login-formr">
        <div className="form-groupr">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="name"
            value={addUser.name}
            onChange={handleEvent}
          />
        </div>
        <div className="form-groupr">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={addUser.password}
            onChange={handleEvent}
          />
        </div>
        <div className="form-groupr">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={addUser.email}
            onChange={handleEvent}
          />
        </div>
        <div className="form-groupr">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={addUser.location}
            onChange={handleEvent}
          />
        </div>
        <button type="submit" className="btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
