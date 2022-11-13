import React from "react";

function RepositoryCard({ title, description }) {
  return (
    <li className="repo-card">
      <span className="title">{title}</span>
      <span className="description">{description}</span>
    </li>
  );
}

export default RepositoryCard;
