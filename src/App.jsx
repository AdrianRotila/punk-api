import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import './App.scss';
import BeersContainer from './containers/BeersContainer/BeersContainer';


function App() {
  const [beers, setBeers] = useState();

  const fetchBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers";
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
  }

  useEffect(() => {
    fetchBeers();
  }, [])

  return (
    <Router>
      <div className="App">
      

      <Routes>
          <Route>

          </Route>
          <Route>

          </Route>


      </Routes>
        


        <BeersContainer  beers = {beers}/>
      </div>

    </Router>
  );
}

export default App;
