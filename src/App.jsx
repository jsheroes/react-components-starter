import "./App.css";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm/SearchForm";

const cards = [
  {
    title: "facebook/react",
    descriprion: "placeholder descriprion",
    stars: 500,
    forks: 100,
  },
  {
    title: "vue/vue",
    descriprion: "placeholder descriprion",
    stars: 500,
    forks: 100,
  },
  {
    title: "sveltejs/svelte",
    descriprion: "placeholder descriprion",
    stars: 500,
    forks: 100,
  },
];

function App() {
  const arrayCards = cards.map((card) => (
    <Card
      title={card.title}
      descriprion={card.descriprion}
      stars={card.stars}
      forks={card.forks}
    />
  ));
  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <ul className="repo-cards">{arrayCards}</ul>
      </main>
    </>
  );
}

export default App;
