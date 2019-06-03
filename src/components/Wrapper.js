import React, { Component, createContext } from "react";
import { Router, Route } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import PodiumComponent from "./PodiumComponent";
import ScoreboardComponent from "./ScoreboardComponent";
import BattlefieldComponent from "./BattlefieldComponent";
import history from "./history";

export class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: "",
      player2: "",
      champion: ""
    };
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  setChampion = name => {
    this.setState({ champion: name });
  };

  render() {
    console.log(this.props);
    let { player1, player2, champion } = this.state;
    return (
      <div className="wrapper">
        <Router history={history}>
          <Route
            exact
            path="/"
            render={() => (
              <HomeComponent
                onChange={this.onChange}
                player1={player1}
                player2={player2}
              />
            )}
          />
          <Route
            path="/fight"
            render={() => (
              <BattlefieldComponent
                player1={player1}
                player2={player2}
                setChampion={this.setChampion}
              />
            )}
          />
          <Route
            path="/congratulations"
            render={() =>
                <PodiumComponent champion={champion} player1={player1} player2={player2} />
            }
          />
          <Route path="/scoreboard" component={ScoreboardComponent} />
        </Router>
      </div>
    );
  }
}
