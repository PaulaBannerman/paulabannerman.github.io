import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from '../Home/Home'
import About from '../About/About'
import GraphicDesign from '../Portfolio/GraphicDesign/GraphicDesign'
import AppsWeb from '../Portfolio/AppsWeb/Appsweb'
import Video from '../Portfolio/Video/Videos'
import Resume from '../Resume/Resume'
import Contact from '../Contact/Contact'
import Navigation from '../Navigation/Navigation'
function App() {
  return (
  <div>  
    <Navigation></Navigation>
<div className="App">
<Route path="/" exact component={Home} ></Route>
<Route path="/about" component={About}></Route>
<Route path="/apps" component={AppsWeb}></Route>
<Route path="/contact" component={Contact}></Route>
<Route path="/graphicdesign" component={GraphicDesign}></Route>
<Route path="/resume" component={Resume}></Route>
<Route path="/video" component={Video}></Route>
</div>


</div>
  );
}

export default App;
