import React, { useState } from "react";
import PlayerManager from "./components/PlayerManager";
import PlayerRecordsView from "./components/PlayerRecordsView";
import MatchHistoryView from "./components/MatchHistoryView";
function App() {
  const [players, setPlayers] = useState([
    { name: 1 },
    { name: 2 },
    { name: 3 },
    { name: 4 },
    { name: 5 },
    { name: 6 },
    { name: 7 },
    { name: 8 },
  ]);
  const [playerRecords, setPlayerRecords] = useState([]);
  const [remainingPlayers, setRemainingPlayers] = useState([]);
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <PlayerManager
          state={{
            players: [players, setPlayers],
            playerRecords: [playerRecords, setPlayerRecords],
            remainingPlayers: [remainingPlayers, setRemainingPlayers],
          }}
        ></PlayerManager>
        <div>
          <PlayerRecordsView
            state={{
              playerRecords: [playerRecords],
              remainingPlayers: [remainingPlayers, setRemainingPlayers],
            }}
          ></PlayerRecordsView>
        </div>
      </div>
      <div>
          <MatchHistoryView
            state={{
              playerRecords: [playerRecords],
            }}
          ></MatchHistoryView>
        </div>
    </div>
  );
}

export default App;
