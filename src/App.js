// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import UnveilDigitalPotential from './components/UnveilDigitalPotential';
import GetCustomStrategy from './components/GetCustomStrategy';
import ExploreOurServices from './components/ExploreOurServices';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/unveil-digital-potential" component={UnveilDigitalPotential} />
        <Route path="/get-custom-strategy" component={GetCustomStrategy} />
        <Route path="/explore-our-services" component={ExploreOurServices} />
      </Switch>
    </Router>
  );
}

export default App;
