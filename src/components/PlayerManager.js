import React, { useState } from "react";
import "./PlayerManager.css";
function PlayerManager({ state }) {
  const {
    players: [players, setPlayers],
    playerRecords: [playerRecords, setPlayerRecords],
    remainingPlayers: [remainingPlayers, setRemainingPlayers],
  } = {
    player: useState([]),
    ...(state || {}),
    playerRecords: useState([]),
    ...(state || {}),
    remainingPlayers: useState([]),
    ...(state || {}),
  };
  const [name, setName] = useState("");

  function removePlayer(index) {
    players.splice(index, 1);
    setPlayers([...players]);
  }
  function addPlayer() {
    players.push({ name: name });
    setPlayers([...players]);
    setName("");
  }
  function addPlayerRecords(name) {
    playerRecords.push({ name: name });
    setPlayerRecords([...playerRecords]);
    calculateRemainingPlayers();
  }
  function calculateRemainingPlayers() {
    remainingPlayers.length = 0;
    players.forEach((element) => {
      remainingPlayers.push(element);
    });
    let tempPlayerRecords;
    if (playerRecords.length > 5)
      tempPlayerRecords = playerRecords.splice(playerRecords.length - 5, 5);
    else tempPlayerRecords = playerRecords;
    tempPlayerRecords.forEach((record) => {
      remainingPlayers.forEach((player, index) => {
        if (record.name === player.name) remainingPlayers.splice(index, 1);
      });
    });
    setRemainingPlayers(remainingPlayers);
  }
  return (
    <div>
      <div className="input__player__box">
        <input
          className="input__player"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="btn__input__player"
          onClick={() => {
            addPlayer();
          }}
        ></button>
      </div>
      <div className="players">
        <Players
          players={players}
          removePlayer={removePlayer}
          addPlayerRecords={addPlayerRecords}
        ></Players>
      </div>
    </div>
  );
}
function Players({ players, removePlayer, addPlayerRecords }) {
  return players.map((player, index) => {
    return (
      <Player
        key={index}
        index={index}
        player={player}
        removePlayer={removePlayer}
        addPlayerRecords={addPlayerRecords}
      ></Player>
    );
  });
}
function Player({ index, player, removePlayer, addPlayerRecords }) {
  return (
    <div className="player" style={{ display: "flex" }}>
      <div
        className="player__move__group"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="player__move go"></div>
        <div className="player__move come"></div>
      </div>
      <div
        className="player__name"
        onClick={() => addPlayerRecords(player.name)}
      >
        {player.name}
      </div>
      <div className="player__predict__move"></div>
      <div>
        <button
          className="player__remove"
          onClick={() => {
            removePlayer(index);
          }}
        ></button>
      </div>
    </div>
  );
}
export default PlayerManager;
