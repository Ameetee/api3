import React from 'react';

const Filter = ({ filterTitle, filterRating, setFilterTitle, setFilterRating }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={filterTitle}
        onChange={(e) => setFilterTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={filterRating}
        onChange={(e) => setFilterRating(e.target.value)}
        min="0"
        max="10"
      />
    </div>
  );
};

export default Filter;
