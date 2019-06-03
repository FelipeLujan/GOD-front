import React, { Component } from "react";

import history from "./history";
import isEmpty from "../utils/isEmpty";
import { base } from "./config";
import axios from "axios";

class PodiumComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { champion, player1, player2 } = this.props;
    if (!isEmpty(champion)) {
      axios
        .put(`${base}/api/winner`, { winner: champion })
        .then()
        .catch(error => {
          alert("An error has occurred while trying to save this match.");
        });
    }else{
        history.push("/")
    }
  }

  render() {
    const { champion, player1, player2 } = this.props;
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
              history.push("/scoreboard");
            }}
          >
            See scoreboard
          </div>
        </div>
      </div>
    );
  }
}

PodiumComponent.propTypes = {};

export default PodiumComponent;
