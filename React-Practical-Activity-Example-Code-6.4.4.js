const addJob = (e) => {
  e.preventDefault();
  const newJob = { id: Date.now(), activity, categories, status };
  setJobs([...jobs, newJob]);
  resetForm();
};