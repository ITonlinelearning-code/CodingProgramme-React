const clearAllJobs = () => {
  setJobs([]);
  localStorage.removeItem('jobs');
};