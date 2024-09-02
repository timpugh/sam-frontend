import React, { useState } from 'react';
import './App.css';

function App() {
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

    console.log(process.env.REACT_APP_ENDPOINT);
    const response = await fetch(`${process.env.REACT_APP_ENDPOINT}players/{id}`, {
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


  return (
    <div className="App">
      <header className="App-header">
        <h1>CALL AN API</h1>
        <button onClick={helloWorld}>Call Hello World</button>
        <button onClick={createPlayer}>Call Create Player</button>
        <button onClick={getPlayer}>Call Get Player</button>
        <button onClick={listPlayers}>Call List Players</button>
        <button onClick={updatePlayer}>Call Update Player</button>
        <button onClick={deletePlayer}>Call Delete Player</button>
        <div>
          {showResult && <code>{JSON.stringify(apiMessage, null, 2)}</code>}
        </div>
      </header>
    </div>
  );
}

export default App;