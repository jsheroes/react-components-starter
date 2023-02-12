import React, { useRef } from "react";

function SearchForm(props) {
  const textInput = useRef(null);
  function buttonClicked(e) {
    e.preventDefault();
    props.onSearch(textInput.current.value);
  }

  return (
    <form className="search-form">
      <input className="input" ref={textInput} />
      <button onClick={buttonClicked} className="button">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
