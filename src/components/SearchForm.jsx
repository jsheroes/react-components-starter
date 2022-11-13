import React, { useRef, useState } from "react";

function SearchForm({ onSearch }) {
  const inputRef = useRef(null);
  const [error, setError] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();

    const searchTerm = inputRef.current.value;
    if (!searchTerm) {
      setError(true);
    } else {
      onSearch(inputRef.current.value);
      setError(false);
    }
  };

  return (
    <form className={`search-form ${error ? "error" : ""}`} onSubmit={onSubmit}>
      <input className="input" name="search" ref={inputRef} />
      <button className="button">Search</button>
    </form>
  );
}

export default SearchForm;
