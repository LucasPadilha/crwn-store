import React from 'react';
import { Switch, Route } from 'react-router-dom';

// styles
import './App.css';

// pages
import HomePage from './pages/homepage/homepage.component';

const NotFoundPage = () => {
  return (
    <h1>Oops... Page not found.</h1>
  );
};

const HatsPage = () => {
  return (
    <div>
      <h1>Hats page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route exact path='/hats' component={ HatsPage } />
        <Route component={ NotFoundPage } />
      </Switch>
    </div>
  );
}

export default App;
