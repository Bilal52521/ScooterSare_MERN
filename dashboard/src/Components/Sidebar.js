import React from 'react';
import { FaHome, FaBriefcase, FaBlog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="sidebar">
    <div className="logo">
      <img src="/Assets/logobottom.png" alt="Logo" />  
      <h1>ScooterShare</h1>
     
    </div>
     <div className='links'>
      <Link to="/dashboard">  <p> <FaHome /> Dashboard</p>  </Link>
      <Link to="/Blogs">  <p> <FaBlog /> Blogs</p>  </Link>
      <Link to="/jobs"> <p> <FaBriefcase /> Jobs</p>  </Link>
      </div>
  </div>
);

export default Sidebar;
