const deleteJob = (jobId) => {
  setJobs(prevJobs => prevJobs.filter(job => job.id !== jobId));
};