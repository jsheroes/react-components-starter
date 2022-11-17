import React, { useState } from "react";


import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Repositories from "./components/Repositories";

function HomePage() {
  const [ searchTerm, setSearchTerm ] = useState();

  return (
    <>
      <Header />
      <main>
        <SearchForm onSearch={(value) => setSearchTerm(value)} />
        <Repositories searchTerm={searchTerm}/>
      </main>
    </>
  );
}

export default HomePage;
