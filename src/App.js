import React, { useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import Checkout from "./Checkout";

import './App.css';
import Home from "./Home";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    
    auth.onAuthStateChanged(authUser => {
      console.log(`User is: ${authUser}`);

      if(authUser) {
        // user just logged in or the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser
        })

      } else {
        // the user is logged out

        dispatch({
          type: "SET_USER",
          user: null
        })

      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
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