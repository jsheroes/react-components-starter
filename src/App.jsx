import "./App.css";
import Head from "./Components/Header/Header";
import SearchForm from "./Components/SearchForm/SearchForm";
import Card from "./Components/Card/Card";

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
  const newArray = cards.map((card) => (
    <Card
      title={card.title}
      description={card.description}
      stars={card.stars}
      forks={card.forks}
    />
  ));

  return (
    <>
      <Head />
      <main>
        <SearchForm />
        <ul className="repo-cards">{newArray}</ul>
      </main>
    </>
  );
}

export default App;
