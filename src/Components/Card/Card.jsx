import React from "react";

function Cards() {
  return (
    <ul className="repo-cards">
      <li className="repo-card">
        <span className="title">facebook/react</span>
        <span className="description">placeholder description</span>
        <section className="footer">
          <div>Stars: 500</div>
          <div>Forks: 100</div>
        </section>
      </li>

    </ul>
  );
}

export default Cards;
