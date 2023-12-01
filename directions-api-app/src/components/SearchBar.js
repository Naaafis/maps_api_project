import React, { useState } from 'react';
import '../styles/searchBarStyles.css';

const SearchBar = ({ onSearch }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(input);
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter destination"
                className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
        </form>
    );
};

export default SearchBar;
