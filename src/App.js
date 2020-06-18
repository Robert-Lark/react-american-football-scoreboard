//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react"; 
import BottomRow from "./BottomRow";
import ClickEvents from "./Componants/ClickEvents";
import "./App.css";


function App(props) {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const homeTeamTouchdown = e => {
    setHomeScore(homeScore + 7)
  };
  const awayTeamTouchdown = e => {
    setAwayScore(awayScore + 7)
  };
  const homeTeamFieldGoal = e => {
    setHomeScore(homeScore + 4)
  };
  const awayTeamFieldGoal = e => {
    setAwayScore(awayScore + 4)
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <ClickEvents homeTouchdown={homeTeamTouchdown} awayTouchdown ={awayTeamTouchdown} awayField = {awayTeamFieldGoal} homeField ={homeTeamFieldGoal} />
    </div>
  );
}

export default App;
