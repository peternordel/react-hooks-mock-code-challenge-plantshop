import React from "react";

function Search({ handleChange, searchQuery }) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
        value={searchQuery}
      />
    </div>
  );
}

export default Search;
