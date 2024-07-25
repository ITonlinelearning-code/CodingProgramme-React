import React, { useState } from 'react';

function CategorySelector() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categoryStyles = {
    readEmails: { backgroundColor: 'orange' },
    sendEmails: { backgroundColor: 'yellow' },
    webParsing: { backgroundColor: 'blue' },
    default: { backgroundColor: 'white' }
  };

  const validateCategory = (category) => {
    return selectedCategory === category;
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <button
        style={validateCategory('readEmails') ? categoryStyles.readEmails : categoryStyles.default}
        onClick={() => handleCategoryClick('readEmails')}
      >
        Read Emails
      </button>
      <button
        style={validateCategory('sendEmails') ? categoryStyles.sendEmails : categoryStyles.default}
        onClick={() => handleCategoryClick('sendEmails')}
      >
        Send Emails
      </button>
      <button
        style={validateCategory('webParsing') ? categoryStyles.webParsing : categoryStyles.default}
        onClick={() => handleCategoryClick('webParsing')}
      >
        Web Parsing
      </button>
    </div>
  );
}

export default CategorySelector;