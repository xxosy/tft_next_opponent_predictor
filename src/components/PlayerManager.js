import React, { useState } from "react";
import "./PlayerManager.css";
function PlayerManager({ state }) {
  const {
    players: [players, setPlayers],
    playerRecords: [playerRecords, setPlayerRecords],
    remainingPlayers: [remainingPlayers, setRemainingPlayers],
    gateMovement: [gateMovement, setGateMovement],
  } = {
    players: useState([]),
    ...(state || {}),
    playerRecords: useState([]),
    ...(state || {}),
    remainingPlayers: useState([]),
    ...(state || {}),
    gateMovement: useState([]),
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
    addGateMovement();
  }
  function addPlayerRecords(name) {
    playerRecords.push({ name: name });
    setPlayerRecords([...playerRecords]);
    calculateRemainingPlayers();
  }
  function addGateMovement() {
    gateMovement.push([]);
    setGateMovement(gateMovement);
  }
  function addGateMovementGo(index) {
    gateMovement[index].push(1);
    setGateMovement(gateMovement);
    console.log(gateMovement);
  }
  function addGateMovementCome(index) {
    gateMovement[index].push(0);
    setGateMovement(gateMovement);
    console.log(gateMovement);
  }
  function calculateRemainingPlayers() {
    remainingPlayers.length = 0;
    players.forEach((element, index) => {
      if (index > 0) remainingPlayers.push(element);
    });
    let tempPlayerRecords;
    if (playerRecords.length > 5)
      tempPlayerRecords = playerRecords.splice(playerRecords.length - 4, 4);
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
          addGateMovementGo={addGateMovementGo}
          addGateMovementCome={addGateMovementCome}
        ></Players>
      </div>
    </div>
  );
}
function Players({
  players,
  removePlayer,
  addPlayerRecords,
  addGateMovementGo,
  addGateMovementCome,
}) {
  return players.map((player, index) => {
    return (
      <Player
        key={index}
        index={index}
        player={player}
        removePlayer={removePlayer}
        addPlayerRecords={addPlayerRecords}
        addGateMovementGo={addGateMovementGo}
        addGateMovementCome={addGateMovementCome}
      ></Player>
    );
  });
}
function Player({
  index,
  player,
  removePlayer,
  addPlayerRecords,
  addGateMovementGo,
  addGateMovementCome,
}) {
  return (
    <div className="player" style={{ display: "flex" }}>
      <div
        className="player__move__group"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div
          className="player__move go"
          onClick={() => {
            addGateMovementGo(index);
          }}
        ></div>
        <div
          className="player__move come"
          onClick={() => {
            addGateMovementCome(index);
          }}
        ></div>
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
