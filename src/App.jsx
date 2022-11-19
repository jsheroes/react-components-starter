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
  let filterCards = [];
  const cardsJSX = filterCards.map((card) => (
    <Card
      title={card.title}
      description={card.description}
      stars={card.stars}
      forks={card.forks}
    />
  ));
  console.log("render");
  return (
    <>
      <Header />
      <main>
        <SearchBar
          onSearch={(value) => {
            console.log(value);
            for (let i = 0; i < cards.length; i++) {
              if (
                cards[i].title.includes(value) ||
                cards[i].description.includes(value)
              ) {
                filterCards.push(cards[i]);
              }
            }
            console.log(filterCards);
          }}
        />
        <ul className="repo-cards">{cardsJSX}</ul>;
      </main>
    </>
  );
}

export default App;
