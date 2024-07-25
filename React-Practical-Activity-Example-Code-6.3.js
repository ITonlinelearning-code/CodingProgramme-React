import React, { useState } from 'react';

function JobManager() {
  const [jobs, setJobs] = useState([]);
  const [activity, setActivity] = useState('');
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState('Need to Complete');

  const addJob = (e) => {
    e.preventDefault();
    const newJob = { activity, categories, status };
    setJobs([...jobs, newJob]);
    // Reset form fields
    setActivity('');
    setCategories([]);
    setStatus('Need to Complete');
  };

  return (
    <div className="job-manager">
      <form onSubmit={addJob}>
        {/* Implement form inputs here */}
      </form>
      <div className="job-columns">
        <JobColumn title="Need to Complete" status="Need to Complete" jobs={jobs} />
        <JobColumn title="In Progress" status="In Progress" jobs={jobs} />
        <JobColumn title="Completed" status="Completed" jobs={jobs} />
      </div>
    </div>
  );
}

function JobColumn({ title, status, jobs }) {
  const filteredJobs = jobs.filter(job => job.status === status);

  return (
    <div className="job-column">
      <h2>{title}</h2>
      {filteredJobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
}

function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.activity}</h3>
      <div className="categories">
        {job.categories.map((category, index) => (
          <span key={index} className="category">{category}</span>
        ))}
      </div>
    </div>
  );
}

export default JobManager;