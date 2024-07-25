import React, { useState, useEffect } from 'react';

function JobManager() {
  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem('jobs');
    return savedJobs ? JSON.parse(savedJobs) : [];
  });
  const [activity, setActivity] = useState('');
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState('Need to Complete');

  useEffect(() => {
    localStorage.setItem('jobs', JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (e) => {
    e.preventDefault();
    const newJob = { id: Date.now(), activity, categories, status };
    setJobs(prevJobs => [...prevJobs, newJob]);
    resetForm();
  };

  const deleteJob = (jobId) => {
    setJobs(prevJobs => prevJobs.filter(job => job.id !== jobId));
  };

  const clearAllJobs = () => {
    setJobs([]);
    localStorage.removeItem('jobs');
  };

  const resetForm = () => {
    setActivity('');
    setCategories([]);
    setStatus('Need to Complete');
  };

  return (
    <div className="job-manager">
      <form onSubmit={addJob}>
        {/* Form inputs here */}
      </form>
      <button onClick={clearAllJobs}>Clear All Jobs</button>
      <div className="job-columns">
        <JobColumn title="Need to Complete" status="Need to Complete" jobs={jobs} deleteJob={deleteJob} />
        <JobColumn title="In Progress" status="In Progress" jobs={jobs} deleteJob={deleteJob} />
        <JobColumn title="Completed" status="Completed" jobs={jobs} deleteJob={deleteJob} />
      </div>
    </div>
  );
}

// JobColumn and JobCard components remain the same