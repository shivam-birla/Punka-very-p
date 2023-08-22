
import React from 'react';

function SearchBar({ onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search beers..."
        onChange={event => onSearch(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
