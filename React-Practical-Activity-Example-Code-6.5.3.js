useEffect(() => {
  localStorage.setItem('jobs', JSON.stringify(jobs));
}, [jobs]);