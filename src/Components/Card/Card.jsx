import React from "react";

function Cards(props) {
  console.log(props);
  return (
    <ul className="repo-cards">
      <li className="repo-card">
        <span className="title">{props.title}</span>
        <span className="description">{props.description}</span>
        <section className="footer">
          <div>Stars: {props.stars}</div>
          <div>Forks: {props.forks}</div>
        </section>
      </li>
    </ul>
  );
}

export default Cards;
