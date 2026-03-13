import React, { useState } from 'react';
import '../styles/Simple.css';

const FilterBar = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    brand: '',
    model: '',
    minYear: '',
    maxYear: '',
    minPrice: '',
    maxPrice: '',
    status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  return (
    <div className="simple-filter-bar">
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', width: '100%' }}>
        <input name="brand" placeholder="Brand" value={filters.brand} onChange={handleChange} />
        <input name="model" placeholder="Model" value={filters.model} onChange={handleChange} />
        <input name="minYear" type="number" placeholder="Min Year" value={filters.minYear} onChange={handleChange} />
        <input name="maxYear" type="number" placeholder="Max Year" value={filters.maxYear} onChange={handleChange} />
        <input name="minPrice" type="number" placeholder="Min Price" value={filters.minPrice} onChange={handleChange} />
        <input name="maxPrice" type="number" placeholder="Max Price" value={filters.maxPrice} onChange={handleChange} />
        <select name="status" value={filters.status} onChange={handleChange}>
          <option value="">Status</option>
          <option value="available">Available</option>
          <option value="sold">Sold</option>
        </select>
        <button type="submit">Filter</button>
      </form>
    </div>
  );
};

export default FilterBar;
