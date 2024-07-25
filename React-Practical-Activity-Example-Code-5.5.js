import React, { useState } from 'react';

const JobForm = () => {
  const [jobDetails, setJobDetails] = useState({
    title: '',
    category: '',
    status: 'To Start'
  });

  const categories = ['Read Emails', 'Web Parsing', 'Send Emails'];
  const statuses = ['To Start', 'In Progress', 'Completed'];

  const handleInputChange = (e) => {
    // Implement input change handler
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={jobDetails.title}
        onChange={handleInputChange}
        placeholder="Enter job title"
      />
      
      <select
        name="category"
        value={jobDetails.category}
        onChange={handleInputChange}
      >
        <option value="">Select a category</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

      <select
        name="status"
        value={jobDetails.status}
        onChange={handleInputChange}
      >
        {statuses.map(status => (
          <option key={status} value={status}>{status}</option>
        ))}
      </select>

      <button type="submit">Add Job</button>
    </form>
  );
};

export default JobForm;