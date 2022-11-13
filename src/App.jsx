import React, { useState, useEffect } from "react";

import { fetchMostPopularRepos, searchReposByName } from "./service";

import SearchForm from "./components/SearchForm";
import RepositoryCard from "./components/RepositoryCard";
import "./App.css";

function App() {
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchMostPopularRepos().then((data) => {
      setRepositories(data);
      setIsLoading(false);
    });
  }, []);

  const onSearch = (searchTerm) => {
    setIsLoading(true);
    searchReposByName(searchTerm).then((data) => {
      setRepositories(data);
      setIsLoading(false);
    });
  };

  return (
    <>
      <header>
        <h1>GitHub Explorer</h1>
      </header>

      <main>
        <SearchForm onSearch={onSearch} />
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {repositories.map((repository, index) => (
              <RepositoryCard
                title={repository.full_name}
                description={repository.description}
                key={index}
              />
            ))}
          </ul>
        )}
      </main>
    </>
  );
}

export default App;
