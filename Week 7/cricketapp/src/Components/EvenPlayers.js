// src/EvenPlayers.js
import React from 'react';

const EvenPlayers = ({ team }) => {
  const players = team.filter((_, index) => index % 2 !== 0);
  const ordinals = ['Second', 'Fourth', 'Sixth', 'Eighth'];

  return (
    <ul>
      {players.map((player, index) => (
        <li key={index}>
          {ordinals[index] || `Player ${index * 2 + 2}`} : {player}
        </li>
      ))}
    </ul>
  );
};

export default EvenPlayers;
