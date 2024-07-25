const [jobs, setJobs] = useState(() => {
  const savedJobs = localStorage.getItem('jobs');
  return savedJobs ? JSON.parse(savedJobs) : [];
});