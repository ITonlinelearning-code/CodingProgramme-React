import React from 'react';
import Card from './components/Card';

const App = () => {
  const cardData = [
    {
      title: "React Development",
      description: "Learn how to build web applications with React and Tailwind CSS.",
      buttonText: "Learn More",
      imageUrl: "https://example.com/react-image.jpg"
    },
    {
      title: "Tailwind CSS Mastery",
      description: "Master the art of rapid UI development with Tailwind CSS.",
      buttonText: "Explore",
      imageUrl: "https://example.com/tailwind-image.jpg"
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">My Card Application</h1>
      <div className="flex flex-wrap justify-center">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default App;