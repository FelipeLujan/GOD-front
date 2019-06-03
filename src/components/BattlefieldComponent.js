import React, { Component } from "react";
import PropTypes from "prop-types";
import { Options } from "./Options";
import PodiumComponent from "./PodiumComponent";
import ArenaComponent from "./ArenaComponent";
import SelectComponent from "./SelectComponent";
import axios from "axios"
import {base} from "./config";
import isEmpty from "../utils/isEmpty";

class BattlefieldComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choises: [],
      step: 1,
      turn: 1,
      player1selection: undefined,
      player2selection: undefined,
      rounds: [],
      winner: undefined
    };
  }

    componentDidMount() {
        const { player1, player2 } = this.props;
        if ( !isEmpty(player1) && !isEmpty(player2) ) {
            axios.post(`${base}/api/players`,{player1,player2})
        };
    }

    nextStep = () => {
    let { step, turn } = this.state;
    let newStep = step + 1;
    let newTurn = turn === "a" ? "b" : "a";
    this.setState({ step: newStep, turn: newTurn });
  };

  newRound = () => {
    const { history, round } = this.props;
    let { winner } = this.state;
    if (winner) {
      history.push("/scoreboard");
    } else {
      this.setState({ step: 1,player1selection: undefined,
          player2selection: undefined, });
    }
  };
  playerSelection = (player, selection) => {
    const { player1, player2 } = this.props;
    if (player === player1) {
      this.setState({ player1selection: selection });
    } else {
      this.setState({ player2selection: selection });
    }
  };

roundWinner= (name) => {
    let {rounds} = this.state;
    let newRounds = rounds
    newRounds.push(name)
    this.setState({rounds:newRounds})
}


  render() {
    console.log(this.props)
    const { step, player1selection, player2selection,rounds } = this.state;
    const { player1, player2, history, setChampion } = this.props;
    console.log(step);
    let displayData = <div />;
    if (step <= 2) {
      displayData = (
        <SelectComponent
          nextStep={this.nextStep}
          player1={player1}
          player2={player2}
          step={step}
          playerSelection={this.playerSelection}
          player1selection={player1selection}
          player2selection={player2selection}

        />
      );
    } else if ( step === 3 )  {
      displayData = (
        <ArenaComponent
          player1={player1}
          player2={player2}
          newRound={this.newRound}
          player1selection={player1selection}
          player2selection={player2selection}
          roundWinner={this.roundWinner}
          rounds={rounds}
          history={history}
          setChampion={setChampion}
          rounds={rounds}
        />
      );
    }else{
        displayData=("congrats")
    }
    return displayData;
  }
}

BattlefieldComponent.propTypes = {};

export default BattlefieldComponent;
