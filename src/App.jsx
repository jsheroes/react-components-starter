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
        <div className="content-wrapper">
          <h1>Welcome to the JSHeroes Bootcamp!</h1>
        </div>
        <img className="bear" src="/js-heroes-bear.png" />
      </header>

      <main>
        <SearchForm onSearch={onSearch} />
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ul className="repo-cards">
            {repositories.map((repository, index) => (
              <RepositoryCard repository={repository} key={index} />
            ))}
          </ul>
        )}
      </main>
    </>
  );
}

export default App;
