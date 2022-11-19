import "./App.css";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm/SearchForm";

function App() {
  return (
    <>
      <Header />
      <main>
        <SearchForm />
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
