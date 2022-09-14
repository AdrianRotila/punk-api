// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import BeersContainer from './containers/BeersContainer/BeersContainer';
import Nav from "./components/Nav/Nav";
import { useState } from "react";

function App() {
  const [searchedTerm, setSearchedTerm] = useState("");
 
  const getSearchInput = (event) => {
    setSearchedTerm(event.target.value);
    
  }

  return (
    // <Router>
      <div className="App">
      <Nav getSearchInput={getSearchInput}/>

      {/* <Routes>
          <Route>

          </Route>
          <Route>

          </Route>


      </Routes> */}
        
        <BeersContainer searchedTerm = {searchedTerm}/>
      </div>

    // </Router>
  );
}

export default App;
