const Card = (props) => (
  <li className="repo-card">
    <span className="title">{props.title}</span>
    <span className="description">{props.description}</span>
    <section className="footer">
      <div>Stars: {props.stars}</div>
      <div>Forks: {props.forks}</div>
    </section>
  </li>
);

export default Card;
