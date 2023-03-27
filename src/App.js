import { useState } from 'react';
import SingleCard from './components/SingleCard';
import './App.css';

const cardImages = [
  {"src": "/img/helmet-1.png"},
  {"src": "/img/potion-1.png"},
  {"src": "/img/ring-1.png"},
  {"src": "/img/scroll-1.png"},
  {"src": "/img/shield-1.png"},
  {"src": "/img/sword-1.png"}
];

function App() {
  const [cards, setCards] = useState([]) // cards in play
  const [turns, setTurns ] = useState(0) // number of turns

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5) // randomize
      .map((card) => ({ ...card, id: Math.random() })) // add id

    setCards(shuffledCards)
    setTurns(0)
  }

  console.log(cards);
  console.log(turns);

  return (
    <div className="App">
      <h1>Snap Game</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}

export default App;
