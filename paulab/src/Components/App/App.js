import React from 'react';
import './App.css';
import Home from '../Home/Home'
import Navigation from '../Navigation/Navigation'
function App() {
  return (
  <div>  
    <Navigation></Navigation>
    <div className="App">
  <Home></Home>
  {/* <header className="App-header">
    
  </header> */}
</div>
</div>
  );
}

export default App;
