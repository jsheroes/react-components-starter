import React from "react";
import { Link } from "react-router-dom";

function RepositoryCard({ repository }) {
  const { full_name, name, description, owner, stargazers_count, forks_count } =
    repository;

  return (
    <li className="repo-card">
      <Link to={`${owner.login}/${name}`}>
        <span className="title">{full_name}</span>
        <span className="description">{description}</span>
        <section className="footer">
          <div>Stars: {stargazers_count}</div>
          <div>Forks: {forks_count}</div>
        </section>
      </Link>
    </li>
  );
}

export default RepositoryCard;
