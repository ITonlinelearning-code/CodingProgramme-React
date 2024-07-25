const addJob = (e) => {
  e.preventDefault();
  const newJob = { id: Date.now(), activity, categories, status };
  setJobs(prevJobs => [...prevJobs, newJob]);
  resetForm();
};