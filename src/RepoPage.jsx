import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchRepoDetails } from "./service";

import Header from "./components/Header";

import "./App.css";

function RepoPage() {
  const { owner, repo } = useParams();

  const [repository, setRepository] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchRepoDetails(owner, repo).then((data) => {
      setRepository(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <Header />

      <main>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <h1>{repository.name}</h1>
            <p>{repository.description}</p>
          </>
        )}
      </main>
    </>
  );
}

export default RepoPage;
