import React from "react";
import { Link } from "react-router-dom";

function RepositoryCard({ repository }) {
  const { full_name, name, description, owner } = repository;

  return (
    <li className="repo-card">
      <Link to={`${owner.login}/${name}`}>
        <span className="title">{full_name}</span>
      </Link>
      <span className="description">{description}</span>
      <section className="footer">
        <div>Stars: 500</div>
        <div>Forks: 100</div>
      </section>
    </li>
  );
}

export default RepositoryCard;