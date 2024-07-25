import React, { useState } from 'react';

const JobForm = () => {
  const [jobDetails, setJobDetails] = useState({
    title: '',
    status: 'To Start',
    categories: []
  });

  const categoryOptions = ['Read Emails', 'Web Parsing', 'Send Emails'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleCategoryToggle = (category) => {
    // Implement category toggle functionality
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted job details:', jobDetails);
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
        name="status"
        value={jobDetails.status}
        onChange={handleInputChange}
      >
        <option value="To Start">To Start</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <div>
        {categoryOptions.map(category => (
          <button
            key={category}
            type="button"
            onClick={() => handleCategoryToggle(category)}
            // Add styling based on selection state
          >
            {category}
          </button>
        ))}
      </div>

      <button type="submit">Add Job</button>
    </form>
  );
};

export default JobForm;