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
  let arrayCards = [];
  for (let i = 0; i < cards.length; i++) {
    arrayCards.push(
      <Card
        title={cards[i].title}
        description={cards[i].description}
        stars={cards[i].stars}
        forks={cards[i].forks}
      />
    );
  }

  return (
    <>
      <Header />
      <main>
        <SearchBar />
        <ul className="repo-cards">{arrayCards}</ul>
      </main>
    </>
  );
}

export default App;
