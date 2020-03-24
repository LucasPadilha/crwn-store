import React from 'react';
import { Switch, Route } from 'react-router-dom';

// styles
import './App.css';

// pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import NotFoundPage from './pages/not-found/not-found.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route exact path='/shop' component={ ShopPage } />
        <Route component={ NotFoundPage } />
      </Switch>
    </div>
  );
}

export default App;
