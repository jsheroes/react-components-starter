import { useRef } from "react";

const SearchBar = (props) => {
  let inputRef = useRef(null);
  const handleSearch = (event) => {
    event.preventDefault();
    props.onSearch(inputRef.current.value);
  };

  return (
    <form className="search-form">
      <input ref={inputRef} className="input" />
      <button onClick={handleSearch} className="button">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
