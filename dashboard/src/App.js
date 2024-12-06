import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
// import Header from './Components/Header';
import Blogs from './Pages/Blogs';
import Jobs from './Pages/Jobs';
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

import "./Styles/Sidebar.css";
import "./Styles/Topbar.css";
// import "./Styles/Header.css";
import "./Styles/Blogs.css";
import "./Styles/Jobs.css";
import "./Styles/Dashboard.css";
import "./Styles/Register.css";

import './Styles/Global.css';


const App = () => (
  <Router>
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Topbar />
    
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Jobs" element={<Jobs />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
