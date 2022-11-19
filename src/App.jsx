import "./App.css";
import Head from "./Components/Header/Header";
import SearchForm from "./Components/SearchForm/SearchForm";
import Card from "./Components/Card/Card";
import { useState, useEffect } from "react";

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
    description: "test description",
    stars: 500,
    forks: 100,
  },
];

function App() {
  const [cards, setCards] = useState([]);

  const [filteredCards, setFilteredCards] = useState(cards);

  const cardsJSX = filteredCards.map((card) => (
    <Card
      title={card.name}
      description={card.description}
      stars={card.score}
      forks={card.forks}
    />
  ));
  console.log("rerender", filteredCards);
  useEffect(() => {
    // cand apare componenta prima data
    // console.log("prima data");
    fetch("https://api.github.com/search/repositories?q=stars:>10000")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCards(data.items);
      });
  }, []);

  return (
    <>
      <Head />
      <main>
        <SearchForm
          onSearch={(value) => {
            console.log(value);
            const items = cards.filter(
              (item) =>
                item.name.includes(value) || item.description.includes(value)
            );
            console.log(filteredCards);
            setFilteredCards(items);
          }}
        />
        {/* {render} */}
        <ul className="repo-cards">{cardsJSX}</ul>
      </main>
    </>
  );
}

export default App;
