import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import Section5 from "./Components/Section5";
import Section6 from "./Components/Section6"; // For pricing plans
import Testimonials from "./Pages/Testimonials";
import Footer from "./Components/Footer";
import Ourteam from "./Pages/Ourteam";
import Faqs from "./Components/Faqs";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Jobs from "./Pages/Jobs";
import Blogpost from "./Pages/Blogpost";

import "./Styles/Section5.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Route for Home */}
          <Route
            path="/"
            element={
              <>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 /> {/* Display plans on the home page */}
              </>
            }
          />
          {/* Route for Pricing */}
          <Route
            path="/Pricing"
            element={
              <>
                <Section6 /> {/* Show pricing plans */}
                 <Faqs />                 {/* <Faqs /> Show FAQs */}
              </>
            }
          />
          {/* Other Routes */}
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/ourteam" element={<Ourteam />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogpost/:id" element={<Blogpost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
