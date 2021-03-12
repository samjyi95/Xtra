import React from 'react'
import logo from './logo.svg';
import './App.css';
import Home from './views/Home'
import Gametime from './views/Gametime'
import Recap from './views/Recap'
import NavBar from './views/NavBar'
import {Route, Link} from 'react-router-dom'

function App() {
  return <div className="App">
  <NavBar />
  <Route exact path="/" component={Home}/>
  <Route exact path="/gametime" component={Gametime}/>
  <Route exact path="/Recap" component={Recap}/>
  </div>
}

export default App;
