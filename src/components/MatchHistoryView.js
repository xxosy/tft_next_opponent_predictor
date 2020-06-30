import React, { useState } from "react";
import "./MatchHistoryView.css";

function MatchHistoryView({ state }) {
  const {
    playerRecords: [playerRecords],
  } = {
    playerRecords: useState([]),
    ...(state || {}),
  };
  return (
    <div style={{ display: "flex" }}>
      <MatchHistoryByRound
        round={0}
        playerRecords={playerRecords}
      ></MatchHistoryByRound>
      <MatchHistoryByRound
        round={1}
        playerRecords={playerRecords}
      ></MatchHistoryByRound>
      <MatchHistoryByRound
        round={2}
        playerRecords={playerRecords}
      ></MatchHistoryByRound>
      <MatchHistoryByRound
        round={3}
        playerRecords={playerRecords}
      ></MatchHistoryByRound>
      <MatchHistoryByRound
        round={4}
        playerRecords={playerRecords}
      ></MatchHistoryByRound>
      <MatchHistoryByRound
        round={5}
        playerRecords={playerRecords}
      ></MatchHistoryByRound>
    </div>
  );
}
function MatchHistoryByRound({ round, playerRecords }) {
  let result = playerRecords.map((element, index) => {
    if (index < (round + 1) * 5 && index >= round * 5)
      return <div className="MatchHistory__name">{element.name}</div>;
  });
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>{result}</div>
  );
}
export default MatchHistoryView;
