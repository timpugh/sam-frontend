import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import PlayerInfo from './PlayerInfo';

function App() {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const [playerData, setPlayerData] = useState(`{
    "player": {
        "player_name": "George Costanza",
        "season": "2002-03",
        "age": "25",
        "ast": "2.2",
        "ast_pct": "1.231",
        "college": "Syracuse",
        "country": "USA",
        "draft_number": "49",
        "draft_round": "2",
        "draft_year": "2000",
        "dreb_pct": "1.123",
        "gp": "11",
        "net_rating": "6",
        "oreb_pct": "1.058",
        "player_height": "188.96",
        "player_weight": "83.100152",
        "pts": "3.6",
        "reb": "2.3",
        "team_abbreviation": "SAS",
        "ts_pct": "1.601",
        "usg_pct": "1.161"
    }
}`);
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, []);

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
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(playerData),
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
    const parsedData = JSON.parse(responseData);
    console.log(parsedData);

    setShowResult(true);
    setApiMessage(parsedData);
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
        <div>
          <textarea
            value={playerData}
            onChange={(e) => setPlayerData(e.target.value)}
            rows={1}
            style={{ resize: 'vertical', color: playerData.startsWith('{') ? 'gray' : 'inherit' }}
            ref={textareaRef}
          />
          <button onClick={createPlayer}>Call Create Player</button>
        </div>
        <div>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
          />
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
          />
          <button onClick={getPlayer}>Call Get Player</button>
        </div>
        <div>
          {showResult && apiMessage.map((player, index) => (
            <PlayerInfo key={index} playerData={player} />
          ))}
        </div>
        <button onClick={listPlayers}>Call List Players</button>
        <button onClick={updatePlayer}>Call Update Player</button>
        <button onClick={deletePlayer}>Call Delete Player</button>
      </header>
    </div>
  );
}

export default App;