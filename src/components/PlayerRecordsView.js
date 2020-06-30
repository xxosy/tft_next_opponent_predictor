import React, { useState } from "react";
import "./PlayerRecordsView.css";
function PlayerRecordsView({ state }) {
  const {
    playerRecords: [playerRecords],
    remainingPlayers: [remainingPlayers],
  } = {
    playerRecords: useState([]),
    ...(state || {}),
    remainingPlayers: useState([]),
    ...(state || {}),
  };
  return (
    <div>
      <div>
        <button className="btn__undo"></button>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <PlayerRecords playerRecords={playerRecords}></PlayerRecords>
        <RemainingPlayers
          remainingPlayers={remainingPlayers}
        ></RemainingPlayers>
      </div>
    </div>
  );
}
function PlayerRecords({ playerRecords }) {
  const length = playerRecords.length;
  return playerRecords.map((item, index) => {
    if (index > length - 6) {
      return (
        <div className="record__name" key={index}>
          {item.name}
        </div>
      );
    }
  });
}
function RemainingPlayers({ remainingPlayers }) {
  return remainingPlayers.map((item, index) => {
    return (
      <div className="remaining__name" key={index}>
        {item.name}
      </div>
    );
  });
}
export default PlayerRecordsView;
