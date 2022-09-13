import { useState } from 'react';
import './App.scss';
import BeersContainer from './containers/BeersContainer/BeersContainer';

function App() {
  const [beers, setBeers] = useState();

  const getBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers";
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data)
  }

  const beerArray = getBeers();

  return (
    <div className="App">
      <BeersContainer beers = {beers}/>
    </div>
  );
}

export default App;
