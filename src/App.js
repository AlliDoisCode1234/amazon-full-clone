
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './components/Checkout'
import Payment from './components/Payment'
import Login from "./components/Login"
import { auth } from './firebase';
import { UseStateValue } from './StateProvider';
import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe('pk_test_51I6KlaEgMoxwgMH8SDBUuqj2jdZEjLhmxqgqzzQd9kxGY9fp1L37db88VVc5aIS0OruU0q1al0DIAhXiKPytwvQi00r59VOY6Q');


function App() {
    const [{}, dispatch] = UseStateValue();

    useEffect(() => {
      //
      // will only run once when the app component loads... 
      //

      auth.onAuthStateChanged(authUser => {
        console.log('THE USER IS >>>', authUser);

        if (authUser) {
          // the user just logged in / the user was logged in

          dispatch({
            type: 'SET_USER',
            user: authUser
          })

        } else {
          // the user is logged out

          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
      })   
    }, [])
  return (
    //  BEM convention
    <Router>
      <div className="App">
    
        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
