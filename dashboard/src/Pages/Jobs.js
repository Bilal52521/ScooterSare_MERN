import React, { useState, useEffect } from "react";
import "../Styles/Jobs.css";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState({
    title: "",
    description: "",
    location: "",
    companyName: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fetch jobs on component mount
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch("http://localhost:8570/api/jobs");
      const data = await response.json();
      if (data.success && Array.isArray(data.jobs)) {
        setJobs(data.jobs);
      } else {
        console.error("No jobs found or invalid response:", data);
        setJobs([]); // Default to empty array if no jobs found
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  const handleSubmit = async () => {
    if (isEditing) {
      try {
        await fetch(`http://localhost:8570/api/updatejob/${editId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(job),
        });
        fetchJobs();
        setIsEditing(false);
        setEditId(null);
      } catch (error) {
        console.error("Error updating job:", error);
      }
    } else {
      try {
        await fetch("http://localhost:8570/api/newjob", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(job),
        });
        fetchJobs();
      } catch (error) {
        console.error("Error adding new job:", error);
      }
    }
    setShowForm(false);
    setJob({ title: "", description: "", location: "", companyName: "" });
  };

  const handleEdit = (id) => {
    const jobToEdit = jobs.find((j) => j._id === id);
    setJob(jobToEdit);
    setIsEditing(true);
    setEditId(id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8570/api/deletejob/${id}`, {
        method: "DELETE",
      });
      fetchJobs();
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  return (
    <div className="jobs">
      <button
        className="create-btn"
        onClick={() => setShowForm((prev) => !prev)}
      >
        {showForm ? "Cancel" : "Create Job"}
      </button>
      {showForm && (
        <div className="job-form">
          <input
            type="text"
            name="title"
            value={job.title}
            onChange={handleChange}
            placeholder="Job Title"
          />
          <input
            type="text"
            name="description"
            value={job.description}
            onChange={handleChange}
            placeholder="Job Description"
          />
          <input
            type="text"
            name="location"
            value={job.location}
            onChange={handleChange}
            placeholder="Location"
          />
          <input
            type="text"
            name="companyName"
            value={job.companyName}
            onChange={handleChange}
            placeholder="Company Name"
          />
          <button onClick={handleSubmit}>{isEditing ? "Update" : "Add"}</button>
        </div>
      )}

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Location</th>
              <th>Company</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job._id}>
                <td>{job.title}</td>
                <td>{job.description}</td>
                <td>{job.location}</td>
                <td>{job.companyName}</td>
                <td>
                  <button onClick={() => handleEdit(job._id)}>Edit</button>
                  <button onClick={() => handleDelete(job._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Jobs;
