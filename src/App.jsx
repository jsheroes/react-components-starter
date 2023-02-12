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
        setFilteredCards(data.items);
      });
  }, []);
  // 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
  return (
    <>
      <Head />
      <main>
        <SearchForm
          onSearch={(value) => {
            console.log(value);
            fetch(`https://api.github.com/search/repositories?q=${value}`, {
              headers: {
                Authorization:
                  "Bearer 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",
              },
            })
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                setFilteredCards(data.items);
              });
          }}
        />
        {/* {render} */}
        <ul className="repo-cards">{cardsJSX}</ul>
      </main>
    </>
  );
}

export default App;
