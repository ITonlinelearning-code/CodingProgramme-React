// JobColumn.js
import React from 'react';

const JobColumn = ({ title, image, alt }) => {
  return (
    <div className="job-column">
      <h2 className="heading-status">
        {title}
        <img src={image} alt={alt} className="status-image" />
      </h2>
      {/* Add content for job items here */}
    </div>
  );
};

export default JobColumn;

// App.js (or your main component file)
import React from 'react';
import JobColumn from './components/JobColumn';
import toDoIcon from './images/to-do-icon.png';
import inProgressIcon from './images/in-progress-icon.png';
import doneIcon from './images/done-icon.png';

const App = () => {
  return (
    <div className="app">
      {/* Other components */}
      <div className="job-columns">
        <JobColumn 
          title="Need to Start" 
          image={toDoIcon} 
          alt="To-do icon" 
        />
        {/* Add two more JobColumn components here */}
      </div>
    </div>
  );
};

export default App;