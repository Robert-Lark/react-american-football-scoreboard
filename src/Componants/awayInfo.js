
import React, { useState } from "react"; 
import BottomRow from "../BottomRow";
import "./App.css";

function awayInfo() {
  const [awayScore, setAwayScore] = useState(0);
  const awayTeamTouchdown = e => {
    setAwayScore(awayScore + 7)
  };
  const awayTeamFieldGoal = e => {
    setAwayScore(awayScore + 4)
  };
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
    </div>
  );
}

export default awayInfo;
