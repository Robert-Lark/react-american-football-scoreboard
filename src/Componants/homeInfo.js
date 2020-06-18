//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react"; 
import BottomRow from "../BottomRow";
import "./App.css";
import "../App.js";
import "./awayInfo.js";
import "./ClickEvents.js";
import "../App.js";

function homeInfo() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const homeTeamTouchdown = e => {
    setHomeScore(homeScore + 7)
  };
  const homeTeamFieldGoal = e => {
    setHomeScore(homeScore + 3)
  };
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{homeScore}</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default homeInfo;
