import React, { useState, useEffect } from "react";

import { fetchMostPopularRepos, searchReposByName } from "./service";

import SearchForm from "./components/SearchForm";
import RepositoryCard from "./components/RepositoryCard";
import "./App.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetchMostPopularRepos().then((data) => {
      setRepositories(data);
    });
  }, []);

  const onSearch = (searchTerm) => {
    searchReposByName(searchTerm).then((data) => {
      setRepositories(data);
    });
  };

  return (
    <>
      <header>
        <h1>GitHub Explorer</h1>
      </header>

      <main>
        <SearchForm onSearch={onSearch} />
        <ul>
          {repositories.map((repository, index) => (
            <RepositoryCard
              title={repository.full_name}
              description={repository.description}
              key={index}
            />
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
