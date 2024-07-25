import React, { useState } from 'react';

function JobManager() {
  const [jobs, setJobs] = useState([]);
  const [activity, setActivity] = useState('');
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState('Need to Complete');

  const addJob = (e) => {
    e.preventDefault();
    const newJob = { id: Date.now(), activity, categories, status };
    setJobs([...jobs, newJob]);
    resetForm();
  };

  const deleteJob = (jobId) => {
    setJobs(jobs.filter(job => job.id !== jobId));
  };

  const resetForm = () => {
    setActivity('');
    setCategories([]);
    setStatus('Need to Complete');
  };

  return (
    <div className="job-manager">
      <form onSubmit={addJob}>
        <input
          type="text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          placeholder="Enter job activity"
        />
        {/* Add category and status inputs here */}
        <button type="submit">Add Job</button>
      </form>
      <div className="job-columns">
        <JobColumn title="Need to Complete" status="Need to Complete" jobs={jobs} deleteJob={deleteJob} />
        <JobColumn title="In Progress" status="In Progress" jobs={jobs} deleteJob={deleteJob} />
        <JobColumn title="Completed" status="Completed" jobs={jobs} deleteJob={deleteJob} />
      </div>
    </div>
  );
}

function JobColumn({ title, status, jobs, deleteJob }) {
  const filteredJobs = jobs.filter(job => job.status === status);

  return (
    <div className="job-column">
      <h2>{title}</h2>
      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} deleteJob={deleteJob} />
      ))}
    </div>
  );
}

function JobCard({ job, deleteJob }) {
  return (
    <div className="job-card">
      <h3>{job.activity}</h3>
      <div className="categories">
        {job.categories.map((category, index) => (
          <span key={index} className="category">{category}</span>
        ))}
      </div>
      <button onClick={() => deleteJob(job.id)}>Delete</button>
    </div>
  );
}

export default JobManager;