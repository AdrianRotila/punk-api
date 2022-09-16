import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.scss';
import BeersContainer from './containers/BeersContainer/BeersContainer';
import Nav from "./components/Nav/Nav";
import { useState } from "react";
import BeerInfo from "./containers/BeerInfo/BeerInfo";

function App() {
  const [searchedTerm, setSearchedTerm] = useState("");
  const [bitterBeers, setBitterBeers] = useState(false);
  const [classicRange, setClassicRange] = useState(false);
  const [highABV, setHighABV] = useState(false);
  const [ascAVB, setAscAVB] = useState(false);
  const [descAVB, setDescAVB] = useState(false);
  const [ascIBU, setAscIBU] = useState(false);
  const [descIBU, setDescIBU] = useState(false);

  const getSearchInput = (event) => {setSearchedTerm(event.target.value)}
  const getBitterBeers = () => {setBitterBeers(!bitterBeers);}
  const getHighABV = () => {setHighABV(!highABV);}
  const getClassicRange = () => {setClassicRange(!classicRange);}
  const sortAscABV = () => {setAscAVB(!ascAVB)}
  const sortDescABV = () => {setDescAVB(!descAVB)}
  const sortAscIBU = () => {setAscIBU(!ascIBU)}
  const sortDescIBU = () => {setDescIBU(!descIBU)}


  return (
    <Router>
      <div className="App">
        <Nav getSearchInput={getSearchInput} 
          getBitterBeers = {getBitterBeers} 
          getClassicRange = {getClassicRange} 
          getHighABV = {getHighABV}
          sortAscABV = {sortAscABV}
          sortDescABV = {sortDescABV}
          sortAscIBU = {sortAscIBU}
          sortDescIBU = {sortDescIBU}
        />
        <Routes>
          <Route 
            exact path = "/" 
            element = {
              <BeersContainer 
                searchedTerm = {searchedTerm} 
                bitterBeers = {bitterBeers}
                classicRange = {classicRange}
                highABV = {highABV}
                ascAVB = {ascAVB}
                descAVB = {descAVB}
                ascIBU = {ascIBU}
                descIBU = {descIBU}
              />
            }>
          </Route>
          <Route
            path= "/beer/:beerId" element = {
            <BeerInfo />
          }>

        </Route>
        </Routes>
     </div>
    </Router>
  );
}

export default App;
