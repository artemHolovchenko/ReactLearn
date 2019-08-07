import React from 'react';
import './Search.css';

const SearchPanel = () => {
    return (
      <input type="text"
                className="form-control search-input"
                placeholder="type to search" />
    );
  };

export default SearchPanel;