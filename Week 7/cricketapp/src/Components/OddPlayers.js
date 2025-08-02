// src/OddPlayers.js
import React from 'react';

const OddPlayers = ({ team }) => {
  const players = team.filter((_, index) => index % 2 !== 1);
  const ordinals = ['First', 'Third', 'Fifth', 'Seventh'];

  return (
    <ul>
      {players.map((player, index) => (
        <li key={index}>
          {ordinals[index] || `Player ${index * 2 + 1}`} : {player}
        </li>
      ))}
    </ul>
  );
};

export default OddPlayers;
