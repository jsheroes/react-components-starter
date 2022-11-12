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
          <li className="repo-card">
            <span className="title">facebook/react</span>
            <span className="description">placeholder description</span>
          </li>

          <li className="repo-card">
            <span className="title">vuejs/vue</span>
            <span className="description">placeholder description</span>
          </li>

          <li className="repo-card">
            <span className="title">sveltejs/svelte</span>
            <span className="description">placeholder description</span>
          </li>
        </ul>
      </main>
    </>
  );
}

export default App;
