import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.css';
import Dashboard from './components/Dashboard';
import BdayCard from './components/BdayCard'
import NewMsg from "./components/NewMsg";

function App() {
  const [cards, setCards] = useState([])

  //Get all cards
  useEffect(() => {
    fetch('https://kathys-birthday.herokuapp.com/bday_cards')
        .then(resp => resp.json())
        .then(cards => setCards(cards))
  }, [cards])

  //Map cards to create individual cards
  const cardArr = cards.map((card) => {
      return(<BdayCard key={card.id} card={card} /> )
  })

  return (
    <Router>
      <Routes>
        <Route path='/new' element={<NewMsg setCards={setCards} />} />
        <Route exact path='/' element={<Dashboard cards={cards} setCards={setCards} cardArr={cardArr} />} />
      </Routes>
      
    </Router>    
  );
}

export default App;
