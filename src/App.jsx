import "./App.css";
import Head from "./Components/Header/Header";
import SearchForm from "./Components/SearchForm/SearchForm";
import Card from "./Components/Card/Card";
import {useState} from "react";

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
  let filteredCards = [];
  const cardsJSX = filteredCards.map((card) => (
    <Card
      title={card.title}
      description={card.description}
      stars={card.stars}
      forks={card.forks}
    />
  ));
  console.log("rerender", filteredCards);

  return (
    <>
      <Head />
      <main>
        <SearchForm
          onSearch={(value) => {
            console.log(value);
            filteredCards = cards.filter(
              (item) =>
                item.title.includes(value) || item.description.includes(value)
            );
            console.log(filteredCards);
          }}
        />
        <ul className="repo-cards">{cardsJSX}</ul>
      </main>
    </>
  );
}

export default App;
