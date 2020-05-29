import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from '../Home/Home'
import About from '../About/About'
import Navigation from '../Navigation/Navigation'
function App() {
  return (
  <div>  
    <Navigation></Navigation>
    <div className="App">
  <Route path="/" exact component={Home} ></Route>
<Route path="/about" component={About}></Route>
</div>


</div>
  );
}

export default App;
