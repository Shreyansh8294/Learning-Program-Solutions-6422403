import React, { useState } from 'react';
import './App.css';

import ListofPlayers from './Components/ListofPlayers';
import Scorebelow70 from './Components/Scorebelow70';
import OddPlayers from './Components/OddPlayers';
import EvenPlayers from './Components/EvenPlayers';
import ListofIndianPlayers from './Components/ListofIndianPlayers';

import { players, IndianTeam, IndianPlayers } from './data';

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setFlag(!flag)}>
        {flag ? "Show Indian Team View" : "Show Player Score View"}
      </button>

      {flag ? (
        <div>
          <h1>List of Players</h1>
          <ListofPlayers players={players} />
          <hr />
          <h1>List of Players having Scores Less than 70</h1>
          <Scorebelow70 players={players} />
        </div>
      ) : (
        <div>
          <h1>Indian Team</h1>
          <h1>Odd Players</h1>
          <OddPlayers team={IndianTeam} />
          <hr />
          <h1>Even Players</h1>
          <EvenPlayers team={IndianTeam} />
          <hr />
          <h1>List of Indian Players Merged:</h1>
          <ListofIndianPlayers IndianPlayers={IndianPlayers} />
        </div>
      )}
    </div>
  );
}

export default App;
