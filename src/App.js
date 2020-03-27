import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// styles
import './App.css';

// pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/signin-signup/signin-signup.component';
import NotFoundPage from './pages/not-found/not-found.component';
import { auth } from './firebase/firebase.utils';

// Components
import Header from './components/header/header.component';

class App extends Component {
  unsubscribeFromAuth = null;

  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={ this.state.currentUser } />
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route exact path='/shop' component={ ShopPage } />
          <Route exact path='/signin' component={ SignInSignUpPage } />
          <Route component={ NotFoundPage } />
        </Switch>
      </div>
    )
  }
}

export default App;
