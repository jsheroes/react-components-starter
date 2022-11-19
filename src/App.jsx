import "./App.css";
import Header from "./components/header";
import SearchBar from "./components/searchBar";
import Card from "./components/card";

function App() {
  return (
    <>
      <Header />
      <main>
        <SearchBar />
        <ul className="repo-cards">
          <Card />
          <Card />
          <Card />
        </ul>
      </main>
    </>
  );
}

export default App;
