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
  const [ascAVB, setAscAVB] = useState(false);
  const [descAVB, setDescAVB] = useState(false);
  const [ascIBU, setAscIBU] = useState(false);
  const [descIBU, setDescIBU] = useState(false);

  const getSearchInput = (event) => {setSearchedTerm(event.target.value)}
  const getBitterBeers = () => {
    if(bitterBeers === false) {
      setBitterBeers(!bitterBeers);
      setHighABV(false);
      setClassicRange(false);
      setAscAVB(false)
      setDescAVB(false)
      setAscIBU(false)
      setDescIBU(false)
    }
  }
  const getHighABV = () => {
    if(highABV === false){
      setHighABV(!highABV);
      setClassicRange(false);
      setAscAVB(false)
      setDescAVB(false)
      setAscIBU(false)
      setDescIBU(false)
      setBitterBeers(false)
    }
  }
  const getClassicRange = () => {
    if(classicRange === false) { 
      setClassicRange(!classicRange);
      setAscAVB(false)
      setDescAVB(false)
      setAscIBU(false)
      setDescIBU(false)
      setHighABV(false)
      setBitterBeers(false)
    }
  }
  const sortAscABV = () => {
    if(ascAVB === false) {
      setAscAVB(!ascAVB)
      setDescAVB(false)
      setAscIBU(false)
      setDescIBU(false)
      setClassicRange(false)
      setHighABV(false)
      setBitterBeers(false)
    }
  }
  const sortDescABV = () => {
    if(descAVB === false) {
      setDescAVB(!descAVB)
      setAscAVB(false)
      setAscIBU(false)
      setDescIBU(false)
      setClassicRange(false)
      setHighABV(false)
      setBitterBeers(false)
    }
  }
  const sortAscIBU = () => {
    if(ascIBU === false) {
      setAscIBU(!ascIBU)
      setDescAVB(false)
      setAscAVB(false)
      setDescIBU(false)
      setClassicRange(false)
      setHighABV(false)
      setBitterBeers(false)
    }
  }
  const sortDescIBU = () => {
    if(descIBU === false){
      setDescIBU(!descIBU)
      setAscIBU(false)
      setDescAVB(false)
      setAscAVB(false)
      setClassicRange(false)
      setHighABV(false)
      setBitterBeers(false)
    }
  }

  return (
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
    </div>
  );
}

export default App;
