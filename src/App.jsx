import React from "react";

import { repositories } from "./data";
import RepositoryCard from "./components/RepositoryCard";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>GitHub Explorer</h1>
      </header>

      <main>
        <form className="search-form">
          <input className="input" />
          <button className="button">Search</button>
        </form>

        <ul>
          {repositories.map((repository, index) => (
            <RepositoryCard
              title={repository.title}
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
