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