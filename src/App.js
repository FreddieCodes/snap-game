import { useState, useEffect } from 'react';
import SingleCard from './components/SingleCard';
import './App.css';

const cardImages = [
  {"src": "/img/helmet-1.png" , matched: false},
  {"src": "/img/potion-1.png" , matched: false},
  {"src": "/img/ring-1.png" , matched: false},
  {"src": "/img/scroll-1.png" , matched: false},
  {"src": "/img/shield-1.png" , matched: false},
  {"src": "/img/sword-1.png" , matched: false}
];

function App() {
  const [cards, setCards] = useState([]) // cards in play
  const [turns, setTurns ] = useState(0) // number of turns
  const [choiceOne, setChoiceOne] = useState(null) // first card choice
  const [choiceTwo, setChoiceTwo] = useState(null) // second card choice

  // compare choices
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src || card.src === choiceTwo.src) {
              return {...card, matched: true} // mark as matched 
            } else {
              return card; // leave unmatched
            }
          })
        })
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000); // reset choices after 1 second
      }
    }
  }, [choiceOne, choiceTwo])

    console.log(cards);
  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5) // randomize
      .map((card) => ({ ...card, id: Math.random() })) // add id

    setCards(shuffledCards)
    setTurns(0)
  }

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  // reset choices & increase turns
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
  }

  return (
    <div className="App">
      <h1>Snap Game</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard 
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
