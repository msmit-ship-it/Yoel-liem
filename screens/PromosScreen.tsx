
import React from 'react';

const PromosScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8">
       <i className="fa-solid fa-tag text-6xl text-gojek-green mb-4"></i>
      <h1 className="text-2xl font-bold text-gray-800">Promos</h1>
      <p className="text-gray-600 mt-2">Check back soon for exciting promotions and deals!</p>
    </div>
  );
};

export default PromosScreen;
