import { useState } from 'react';
import './App.scss';

function App() {
  const [beers, setBeers] = useState();

  const getBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers";
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data)
  }
  
  

  return (
    <div className="App">
      <header className="App-header">
        { }
    
      </header>
    </div>
  );
}

export default App;
