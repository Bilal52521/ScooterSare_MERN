import React from 'react';
import { Link } from 'react-router-dom';
import {FaSignInAlt, FaSignOutAlt} from 'react-icons/fa';

const TopBar = () => (
  <div className="top-bar">
    <h3>Admin Dashboard</h3>
    <div className='navlinks'>
      <Link to="/Login" className='navlink global-hover' ><FaSignInAlt/>Login</Link>
      <Link to="/Register" className='navlink global-hover'><FaSignOutAlt/>Register</Link>
    </div>
  </div>
);

export default TopBar;
