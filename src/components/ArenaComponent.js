import React, {Component} from "react";
import paper from "../assets/paper.png";
import rock from "../assets/rock.png";
import scissors from "../assets/scissor.png";
import history from "./history";

class ArenaComponent extends Component {

    componentDidMount() {
    const {
      player1,
      player2,
      player1selection,
      player2selection,
      history,rounds,
      roundWinner
    } = this.props;
    if (!player1 || !player2 || !player1selection || !player2selection) {
      history.push("/");
    } else {

        roundWinner(this.calculateWinner(player1selection, player2selection));
    }

  }

  calculateWinner = () => {
    const { player1, player2, player1selection, player2selection } = this.props;
    // if (player1selection===player2selection){
    //     return "Tie"
    // }
    if (
      (player1selection === "c" && player2selection === "b") ||
      (player1selection === "b" && player2selection === "a") ||
      (player1selection === "a" && player2selection === "c")
    ) {
      return player1;
      //  a piedra
      //    b papel
      //    c tijera
    } else {
      return player2;
    }
  };

  getImage = letter => {
    switch (true) {
      case letter === "a":
        return rock;
      case letter === "b":
        return paper;
      case letter === "c":
        return scissors;
      default:
        return undefined;
    }
  };
  calculateScore = name => {
    const { rounds } = this.props;
    let score = 0;
      if ( rounds.length> 0) {
          rounds.map(data => (data === name ? (score += 1) : null));
      };
      console.log("rounds====>",rounds)
    return score;
  };

  render() {
    const {
      player1,
      player2,
      step,
      nextStep,
      newRound,
      player1selection,
      player2selection,setChampion
    } = this.props;
    if (player1 && player2 && player1selection && player2selection) {
      return (
        <div className="common-layout">
          <div className="title">Round1</div>
          <div className="main-content">
            <div className="counter">
              <div className="counter__names">
                {player1} Vs. {player2}{" "}
              </div>
              <div className="counter__winner">
                {` ${this.calculateWinner(
                  player1selection,
                  player2selection
                )} wins this round.`}
              </div>
              <div className="counter__rounds">{`${this.calculateScore(
                player1
              )} | ${this.calculateScore(player2)}`}</div>
            </div>
            <div className="showdown">
              <div className="showdown__player1">
                <span> {player1} </span>
                <div>
                  <img src={this.getImage(player1selection)} alt="paper" />
                </div>
              </div>
              <div className="showdown__player1">
                <span> {player2} </span>
                <div>
                  <img src={this.getImage(player2selection)} alt="paper" />
                </div>
              </div>
            </div>
          </div>

          <div className="action">
            <div className="btn btn--action" onClick={() => {
                if ( this.calculateScore(
                    player1
                )>=3||this.calculateScore(
                    player2
                )>=3 ) {
                    setChampion(this.calculateScore( player1 )>=3?player1:player2)
                  history.push("/congratulations")
                }else{
                    newRound()
                }
            }}>
              Next
            </div>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

ArenaComponent.propTypes = {};

export default ArenaComponent;
