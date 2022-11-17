import React from "react";
import { useParams } from "react-router-dom";

import { useFetch } from "./hooks/useFetch";
import { fetchRepoDetails } from "./service";

import Header from "./components/Header";

function RepoPage() {
  const { owner, repo } = useParams();

  const [isLoading, repository] = useFetch(
    () => fetchRepoDetails(owner, repo),
    []
  );

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
