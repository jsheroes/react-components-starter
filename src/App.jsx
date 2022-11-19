import "./App.css";
import Header from "./components/header";
import SearchBar from "./components/searchBar";
import Card from "./components/card";

const cards = [
  {
    title: "facebook/react",
    description: "placeholder description",
    stars: 500,
    forks: 100,
  },
   {
    title: "vuejs/vue",
    description: "placeholder description",
    stars: 500,
    forks: 100,
  },
  {
    title: "sveltejs/svelte",
    description: "placeholder description",
    stars: 500,
    forks: 100,
  },
];

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
