import React from "react";
import PropTypes from "prop-types";
import paper from "../assets/paper.png";
import scissors from "../assets/scissor.png";
import history from "./history";
import isEmpty from "../utils/isEmpty";

const PodiumComponent = props => {
    const { champion, player1,player2 } = props;
  return (
    <div className="common-layout">
      <div className="title podium">The winner is:</div>
      <div className="main-content">
        <div className={"winnerIs"}>{champion} </div>
          <div className="counter">
              <div className="counter__rounds">Last match:</div>
              <div className="counter__names">{`${player1} Vs. ${player2} `}</div>
          </div>
      </div>
        <div className="action">
            <div
                className="btn btn--control"
                onClick={() => {
                    history.push("/scoreboard")
                }}
            >
                See scoreboard
            </div>
        </div>

    </div>
  );
};

PodiumComponent.propTypes = {};

export default PodiumComponent;
