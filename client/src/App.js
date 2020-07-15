import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp';
import Home from './Pages/Home'
import About from './Pages/About'
import './tailwind.output.css'
function App() {
  

  return (
    <div className="container bg-white mx-auto px-4 font-serif">
    <Router>
    
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/SignIn" component={SignIn} />
        <Route exact path="/SignUp" component={SignUp} />
      </Switch>
     
    </Router>
  </div>
  );
}

export default App;
