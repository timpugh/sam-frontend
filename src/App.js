import React, { useState } from 'react';
import './App.css';

import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
Amplify.configure(config);

// The main app component without authentication wrapper
function AppComponent({signOut, user}) {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState("");

  const helloWorld = async () => {
    console.log(process.env.REACT_APP_ENDPOINT);
    const response = await fetch(`${process.env.REACT_APP_ENDPOINT}hello`, {
      mode: 'cors'
    });

    const responseData = await response.text();
    console.log(responseData)

    setShowResult(true);
    setApiMessage(responseData);
  };

  const createPlayer = async () => {
    console.log(process.env.REACT_APP_ENDPOINT);
    const response = await fetch(`${process.env.REACT_APP_ENDPOINT}players`, {
      mode: 'cors'
    });

    const responseData = await response.text();
    console.log(responseData)

    setShowResult(true);
    setApiMessage(responseData);
  };

  const getPlayer = async () => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const fullName = `${encodeURIComponent(firstName)}%20${encodeURIComponent(lastName)}`;
  
    console.log(process.env.REACT_APP_ENDPOINT);
    const response = await fetch(`${process.env.REACT_APP_ENDPOINT}players/${fullName}`, {
      mode: 'cors'
    });
  
    const responseData = await response.text();
    console.log(responseData)
  
    setShowResult(true);
    setApiMessage(responseData);
  };

  const listPlayers = async () => {
    console.log(process.env.REACT_APP_ENDPOINT);
    const response = await fetch(`${process.env.REACT_APP_ENDPOINT}players`, {
      mode: 'cors'
    });

    const responseData = await response.text();
    console.log(responseData)

    setShowResult(true);
    setApiMessage(responseData);
  };

  const updatePlayer = async () => {
    console.log(process.env.REACT_APP_ENDPOINT);
    const response = await fetch(`${process.env.REACT_APP_ENDPOINT}players/{id}/{date}`, {
      mode: 'cors'
    });

    const responseData = await response.text();
    console.log(responseData)

    setShowResult(true);
    setApiMessage(responseData);
  };

  const deletePlayer = async () => {
    console.log(process.env.REACT_APP_ENDPOINT);
    const response = await fetch(`${process.env.REACT_APP_ENDPOINT}players/{id}/{date}`, {
      mode: 'cors'
    });

    const responseData = await response.text();
    console.log(responseData)

    setShowResult(true);
    setApiMessage(responseData);
  };

  const username = process.env.REACT_APP_SKIP_AUTH === 'true' ? 'LOCAL_DEVELOPER' : user.username;

  return (
    <div className="App">
      {/* Apple-style navigation bar */}
      <nav className="nav-bar">
        <div className="nav-container">
          <div className="nav-logo">Player App</div>
          <div className="nav-menu">
            <span className="nav-item">Home</span>
            <span className="nav-item">Players</span>
            <span className="nav-item">Stats</span>
            <span className="nav-item">About</span>
          </div>
          <div className="user-info">
            <button 
              className="sign-out-button" 
              onClick={signOut || (() => console.log('Sign out not available in local dev'))}
            >
              Sign out
            </button>
          </div>
        </div>
      </nav>

      {/* Main content area */}
      <div className="main-content">
        <div className="hero-section">
          <h1 className="hero-title">Player Management</h1>
          <h2 className="hero-subtitle">Welcome, {username}</h2>
          
          <div className="action-buttons">
            <button className="apple-button" onClick={helloWorld}>Hello World</button>
            <button className="apple-button" onClick={createPlayer}>Create Player</button>
            
            <div className="input-group">
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                className="apple-input"
              />
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                className="apple-input"
              />
              <button className="apple-button" onClick={getPlayer}>Get Player</button>
            </div>
            
            <button className="apple-button" onClick={listPlayers}>List Players</button>
            <button className="apple-button" onClick={updatePlayer}>Update Player</button>
            <button className="apple-button" onClick={deletePlayer}>Delete Player</button>
          </div>
          
          {showResult && (
            <div className="results-container">
              <pre className="results-code">{JSON.stringify(apiMessage, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Conditionally apply the authenticator based on environment variable
let App;
if (process.env.REACT_APP_SKIP_AUTH === 'true') {
  App = AppComponent;
} else {
  App = withAuthenticator(AppComponent);
}

export default App;