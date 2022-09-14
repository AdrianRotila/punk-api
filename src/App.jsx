// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import BeersContainer from './containers/BeersContainer/BeersContainer';
import Nav from "./components/Nav/Nav";
import { useState } from "react";

function App() {
  const [searchedTerm, setSearchedTerm] = useState("");
  const [acidicBeers, setAcidicBeers] = useState(false);
 
  const getSearchInput = (event) => {
    setSearchedTerm(event.target.value);
  }

  const getAcidicBeers = () => {
    setAcidicBeers(!acidicBeers);
  }

  return (
    // <Router>
      <div className="App">
      <Nav getSearchInput={getSearchInput} 
        getAcidicBeers = {getAcidicBeers} 
        // getClassicRange = {getClassicRange} 
        // getHighABV = {getHighABV}
        />

      {/* // /* <Routes>
      //     <Route>

      //     </Route>
      //     <Route>

      //     </Route>


      // </Routes> */ }
        
        <BeersContainer searchedTerm = {searchedTerm} acidicBeers = {acidicBeers}/>
      </div>

    // </Router>
  );
}

export default App;
