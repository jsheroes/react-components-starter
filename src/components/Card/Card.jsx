import React from "react";

function Card(props) {
  return (
    <li className="repo-card">
      <span className="title">{props.title}</span>
      <span className="description">{props.descriprion}</span>
      <section className="footer">
        <div>{props.stars}</div>
        <div>{props.forks}</div>
      </section>
    </li>
  );
}

export default Card;
