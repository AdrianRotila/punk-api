// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import BeersContainer from './containers/BeersContainer/BeersContainer';
import Nav from "./components/Nav/Nav";
import { useState } from "react";

function App() {
  const [searchedTerm, setSearchedTerm] = useState("");
  const [bitterBeers, setBitterBeers] = useState(false);
  const [classicRange, setClassicRange] = useState(false);
  const [highABV, setHighABV] = useState(false);

 
  const getSearchInput = (event) => {
    setSearchedTerm(event.target.value);
  }

  const getBitterBeers = () => {
    setBitterBeers(!bitterBeers);
  }

  const getHighABV = () => {
    setHighABV(!highABV);
  }

  const getClassicRange = () => {
    setClassicRange(!classicRange);
  }

  return (
    // <Router>
      <div className="App">
      <Nav getSearchInput={getSearchInput} 
        getBitterBeers = {getBitterBeers} 
        getClassicRange = {getClassicRange} 
        getHighABV = {getHighABV}
        />

      {/* // /* <Routes>
      //     <Route>

      //     </Route>
      //     <Route>

      //     </Route>


      // </Routes> */ }
        
        <BeersContainer 
          searchedTerm = {searchedTerm} 
          bitterBeers = {bitterBeers}
          classicRange = {classicRange}
          highABV = {highABV}
        />
      </div>

    // </Router>
  );
}

export default App;
