import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import "./Login.css";
import { auth } from './firebase';

function Login() {

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const singIn = e => {
    e.preventDefault();

    // firebase login
    auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
          history.push("/")
        })
        .catch(error => alert(error.message))
  };

  const register = e => {
    e.preventDefault();

    // firebase register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // check if it successfully created a new user with email and password
        if(auth) {
          history.push("/")
        }
      })
      .catch(error => alert(error.massage))
  }

  return (
    <div className="login">
      <Link to="/">
      <img 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" 
      alt=""
      className="login__logo"/>
      </Link>

      <div className="login__container">
        <h1>Sing In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

          <button onClick={singIn} type="submit" className="login__singInButton">Sing In</button>
        </form>

        <p>By singing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Insterest-Based Ads Noice.</p>

        <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login;
