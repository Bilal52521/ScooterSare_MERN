import React, { useEffect, useState } from "react";
import "../Styles/Jobs.css";

const Jobs = () => {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:8570/api/jobs");
        const data = await response.json();
        console.log(data);
        setJobList(data.jobs);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="jobs">
      <h1>Jobs</h1>
      <p>Find your dream job</p>
      {jobList.length > 0 ? (
        jobList.map((job, index) => (
          <div key={index} className="job-card">
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <div className="job-details">
              <div className="job-location">Location: {job.location}</div>
              <div className="job-company">Company: {job.companyName}</div>
            </div>

            <button className="more-info" id="bt">
              More info
            </button>
          </div>
        ))
      ) : (
        <p>No jobs available at the moment.</p>
      )}
    </div>
  );
};

export default Jobs;
