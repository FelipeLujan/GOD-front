import React, { Component, createContext } from "react";
import { Options } from "./Options";
import isEmpty from "../utils/isEmpty";
import history from "./history";

class HomeComponent extends Component {
  render() {
    console.log(this.props);
    const { onChange, player1, player2 } = this.props;
    return (
        <div className="common-layout">
            <div className="title">
                <h1 className="title title__1">GAME</h1>

                <h1 className="title title__2">OF</h1>

                <h1 className="title title__3">DRONES</h1>
            </div>
            <div className="main-content">
                <div className="input-fields">
                    <div className="input-component">
                        <h4 className=" input-component__label ">Player 1</h4>
                        <input
                            placeholder="name"
                            className="input-component__input"
                            onChange={onChange}
                            name="player1"
                        />
                    </div>

                    <div className="input-component">
                        <h4 className=" input-component__label ">Player 2</h4>
                        <input
                            placeholder="name"
                            className="input-component__input"
                            onChange={onChange}
                            name="player2"
                        />
                    </div>
                </div>
            </div>
            <div className="action">
                <div
                    className="btn btn--action"
                    onClick={() => {
                        history.push("/fight")
                    }}
                >
                    Start
                </div>
            </div>
            <div />
        </div>
    );
  }
}

HomeComponent.propTypes = {};

export default HomeComponent;
