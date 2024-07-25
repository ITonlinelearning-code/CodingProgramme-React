const deleteJob = (jobId) => {
  setJobs(jobs.filter(job => job.id !== jobId));
};