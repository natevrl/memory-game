import React, { useState, useEffect } from "react";
import "./styles/styles.scss";
import { v4 as uuidv4 } from "uuid";
import Card from "./components/Card";

const cardList = [
	{ src: "/img/helmet-1.png", matched: false },
	{ src: "/img/potion-1.png", matched: false },
	{ src: "/img/ring-1.png", matched: false },
	{ src: "/img/scroll-1.png", matched: false },
	{ src: "/img/shield-1.png", matched: false },
	{ src: "/img/sword-1.png", matched: false },
];

function App() {
	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);
	const [firstChoice, setFirstChoice] = useState(null);
	const [secondChoice, setSecondChoice] = useState(null);


  useEffect(() => {
    if (firstChoice && secondChoice) {
      if (firstChoice.src === secondChoice.src) {
          firstChoice.matched = true;
          secondChoice.matched = true;
      }
      setupNewTurns();
    }
  }, [firstChoice, secondChoice]);

	function handleNewChoice(data) {
    firstChoice ? setSecondChoice(data) : setFirstChoice(data);
	}

  function setupNewTurns() {
    setFirstChoice(null);
    setSecondChoice(null);
    setTurns(previous => previous + 1);
  }
  

	const shuffleCards = () => {
		const shuffledCards = [...cardList, ...cardList]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: uuidv4() }));
		setCards(shuffledCards);
		setTurns(0);
	};

	return (
		<div className="App">
			<h1>Magic Game</h1>
			<button onClick={shuffleCards}>New Game</button>

			<div className="card-grid">
				{cards.map((card) => (
					<Card 
            key={card.id} 
            card={card} 
            parentFunc={handleNewChoice}
            flipped={card === firstChoice || card === secondChoice || card.matched}
          />
				))}
			</div>
		</div>
	);
}

export default App;
