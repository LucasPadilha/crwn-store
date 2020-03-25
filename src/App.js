import React from 'react';
import { Switch, Route } from 'react-router-dom';

// styles
import './App.css';

// pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/signin-signup/signin-signup.component';
import NotFoundPage from './pages/not-found/not-found.component';

// Components
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route exact path='/shop' component={ ShopPage } />
        <Route exact path='/signin' component={ SignInSignUpPage } />
        <Route component={ NotFoundPage } />
      </Switch>
    </div>
  );
}

export default App;
