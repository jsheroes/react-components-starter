import React, { useState, useEffect } from "react";

import { fetchMostPopularRepos, searchReposByName } from "./service";

import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import RepositoryCard from "./components/RepositoryCard";

function HomePage() {
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
      <Header />
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

export default HomePage;
