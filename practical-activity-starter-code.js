// ProfileCard.js
import React from 'react';

const ProfileCard = ({ image, name, jobTitle, bio }) => {
  return (
    <div className="profile-card">
      {/* Add your code here to display the profile information */}
    </div>
  );
};

export default ProfileCard;

// App.js
import React from 'react';
import ProfileCard from './ProfileCard';

const App = () => {
  const profiles = [
    {
      image: "https://example.com/image1.jpg",
      name: "John Doe",
      jobTitle: "Frontend Developer",
      bio: "Passionate about creating user-friendly web applications."
    },
    // Add at least 2 more profile objects here
  ];

  return (
    <div className="app">
      <h1>Team Profiles</h1>
      {/* Use the map function here to render ProfileCard components */}
    </div>
  );
};

export default App;