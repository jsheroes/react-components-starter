import "./App.css";
import { useState } from "react";
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
    description: "vue vuejs",
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
  const [filterCards, setFilterCards] = useState(cards);

  const cardsJSX = filterCards.map((card) => (
    <Card
      title={card.title}
      description={card.description}
      stars={card.stars}
      forks={card.forks}
    />
  ));
  console.log("render", filterCards);
  return (
    <>
      <Header />
      <main>
        <SearchBar
          onSearch={(value) => {
            console.log(value);
            const items = [];
            for (let i = 0; i < cards.length; i++) {
              if (
                cards[i].title.includes(value) ||
                cards[i].description.includes(value)
              ) {
                items.push(cards[i]);
              }
            }
            console.log(items);
            setFilterCards(items);
          }}
        />
        <ul className="repo-cards">{cardsJSX}</ul>
      </main>
    </>
  );
}

export default App;
