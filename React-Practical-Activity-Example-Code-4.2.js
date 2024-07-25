// App.js
import React from 'react';
import Header from './components/Header';
import JobList from './components/JobList';
import Footer from './components/Footer';

const App = () => {
  const jobs = [
    { id: 1, name: 'Email Extractor', status: 'running' },
    { id: 2, name: 'Data Analyzer', status: 'completed' },
    { id: 3, name: 'Report Generator', status: 'running' }
  ];

  return (
    <div className="app">
      <Header />
      <JobList jobs={jobs} />
      <Footer />
    </div>
  );
};

export default App;

// components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Job Board</h1>
      {/* Add a logo image here */}
    </header>
  );
};

export default Header;

// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>© 2024 Job Board Application</p>
    </footer>
  );
};

export default Footer;

// components/JobList.js
import React from 'react';
import JobItem from './JobItem';

const JobList = ({ jobs }) => {
  return (
    <div className="job-list">
      {/* Map through jobs and render JobItem components */}
    </div>
  );
};

export default JobList;

// components/JobItem.js
import React from 'react';

const JobItem = ({ job }) => {
  // Implement conditional rendering based on job status
  return (
    <div className={`job-item ${job.status}`}>
      {/* Display job information here */}
    </div>
  );
};

export default JobItem;