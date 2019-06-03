import React, { Component } from "react";
import PropTypes from "prop-types";
import { Options } from "./Options";
import isEmpty from "../utils/isEmpty";
import history from "./history";

class SelectComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    };
  }
  componentWillUnmount() {
    this.setState({ error: false });
  }


    componentDidMount() {
        const { player1,player2 } = this.props;
        if ( isEmpty(player2)|| isEmpty(player1) ) {
          history.push("/")
        };
    }


    render() {
    const {
      player1,
      player2,
      step,
      nextStep,
      playerSelection,
      player1selection,
      player2selection
    } = this.props;
    let { error } = this.state;
    let currentSelection = step === 1 ? player1selection : player2selection;
    return (
      <div className="common-layout">
        <div className="title">
          <h2>{step === 1 ? player1 : player2}</h2>
        </div>
        <div className="main-content ">
          <Options
            playerSelection={playerSelection}
            currentPlayer={step === 1 ? player1 : player2}
            currentSelection={currentSelection}
            error={error}
          />
        </div>
        <div className="action">
          <div
            onClick={() => {
              if (!currentSelection) {
                this.setState({ error: true });
              } else {
                nextStep();
                this.setState({ error: false });
              }
            }}
            className="btn btn--action"
          >
            Next Player
          </div>
        </div>
      </div>
    );
  }
}

SelectComponent.propTypes = {};

export default SelectComponent;
