import React from 'react';

const CategoryFilter = ({ setSelectedCategory }) => {
  const categories = ['All', 'Electronics', 'Clothing', 'Home Appliances'];

  return (
    <div className="mb-4">
      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
        Filter by Category
      </label>
      <select
        id="category"
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 p-2 text-gray-700 bg-white transition duration-150 ease-in-out"
      >
        {categories.map(category => (
          <option key={category} value={category !== 'All' ? category : ''}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
