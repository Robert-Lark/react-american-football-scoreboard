import React from "react"; 

import "../App.css";
      
      
      function ClickEvents(props) {
console.log(props);
 return( <div>     
      <section className="buttons">
        <div className="homeButtons">
          <button onClick = {props.homeTouchdown} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {props.homeField} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick = {props.awayTouchdown} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {props.awayField} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
</div>)
}
      export default ClickEvents;