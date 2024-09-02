import React from 'react';
import './index.css';

function Content() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-96 bg-white p-6 rounded-lg shadow-md">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <div className="h-3 w-24 bg-gray-200 rounded-full"></div>
          <div className="flex space-x-2">
            <div className="h-3 w-3 bg-yellow-400 rounded-full"></div>
            <div className="h-3 w-3 bg-green-900 rounded-full"></div>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="h-40 bg-green-900 rounded-lg mb-4"></div>
        
        {/* Color Selection */}
        <div className="flex justify-center space-x-3 mb-4">
          <div className="h-8 w-8 bg-yellow-400 rounded-full"></div>
          <div className="h-8 w-8 bg-green-900 rounded-full"></div>
          <div className="h-8 w-8 bg-yellow-400 rounded-full"></div>
          <div className="h-8 w-8 bg-green-900 rounded-full"></div>
        </div>
        
        {/* Description Section */}
        <h2 className="text-xl font-semibold mb-2">Kaligrafi Surah Yasin 20x40</h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-600">Artist: Joko Anwar</p>
          <p className="text-yellow-400">4.9/5</p>
        </div>
        <p className="text-gray-600 mb-4">Created Date: 30 February 2020</p>
        <a href="#" className="text-blue-600 hover:underline mb-4">See Reviews</a>
        
        {/* Price Section */}
        <p className="text-xl font-bold mb-4">Rp 1.250.000</p>
        
        {/* Checkout Button */}
        <button className="w-full py-2 bg-white text-black border-2 border-black rounded-full font-semibold hover:bg-gray-100">Check Out</button>
      </div>
    </div>
  );
}

export default App;
