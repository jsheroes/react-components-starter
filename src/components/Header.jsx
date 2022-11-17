import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="content-wrapper">
        <h1>Welcome to the JSHeroes Bootcamp!</h1>
      </div>
      <Link to="/" className="bear-link">
        <img className="bear" src="/js-heroes-bear.png" />
      </Link>
    </header>
  );
}

export default Header;
