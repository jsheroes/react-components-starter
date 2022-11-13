import React, { useRef } from "react";

function SearchForm({ onSearch }) {
  const inputRef = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    onSearch(inputRef.current.value);
  };

  return (
    <form className="search-form" onSubmit={onSubmit}>
      <input className="input" name="search" ref={inputRef} />
      <button className="button">Search</button>
    </form>
  );
}

export default SearchForm;
