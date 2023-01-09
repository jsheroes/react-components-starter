import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/header";
import SearchBar from "./components/searchBar";
import Card from "./components/card";

function App() {
  const [filterCards, setFilterCards] = useState([]);

  const cardsJSX = filterCards.map((card) => (
    <Card
      title={card.name}
      description={card.description}
      stars={card.score}
      forks={card.forks}
    />
  ));

  useEffect(() => {
    fetch("https://api.github.com/search/repositories?q=stars:>10000", {
      headers: {
        Authorization: "Bearer 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",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFilterCards(data.items);
      });
  }, []);
  return (
    <>
      <Header />
      <main>
        <SearchBar
          onSearch={(value) => {
            console.log(value);
            const items = [];
            fetch(`https://api.github.com/search/repositories?q=${value}`)
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                setFilterCards(data.items);
              });
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
