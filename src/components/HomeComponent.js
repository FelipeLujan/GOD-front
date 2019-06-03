import React, { Component, createContext } from "react";
import isEmpty from "../utils/isEmpty";
import history from "./history";

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state={  error:undefined,message:undefined}
    }


    validateStart = () => {
        const {player1, player2  } = this.props;
        if ( isEmpty(player1) && isEmpty(player2) ) {
            this.setState({error:true, message:"Come on guys, insert your names" })

        }else  if ( isEmpty(player1)  ) {
            this.setState({error:true, message:"please insert your name, player1." })
        }else if ( isEmpty(player2) ) {
            this.setState({error:true, message:"Please insert your name player 2." })
        }else if ( player2===player1 ) {
            this.setState({error:true, message:"Sorry, you can't challenge yourself (in this game)" })
        }else{
            this.setState({error:false })
            history.push("/fight")
        }




    }
  render() {
    console.log(this.props);
    const { onChange, player1, player2 } = this.props;
    let {error, message} = this.state;
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
                {error&&<h5 className="options">
                    {message}
                </h5>}
            </div>
            <div className="action inline" >
                <div
                    className="btn btn--action"
                    onClick={this.validateStart}
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
