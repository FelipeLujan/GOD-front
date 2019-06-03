import React, { Component } from "react";
import axios from "axios";
import { base } from "./config";
import history from "./history";
import isEmpty from "../utils/isEmpty";

class ScoreboardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { scores: undefined };
  }

  componentDidMount() {
    axios
      .get(`${base}/api/scoreboard`)
      .then(json => {
        this.setState({ scores: json.data });
      })
      .catch(error => {
        console.log(error);
        alert("Ha ocurrido un error al obtener los datos del servidor");
      });
  }

  render() {
    let { scores } = this.state;

    if (!isEmpty(scores)) {
      let sorted = scores.sort((a, b) => b.victories - a.victories);

      let moreRows = sorted.map((row, index) => (
        <tr>
          <td>{index + 1}</td>
          <td>{row.name}</td>
          <td>{row.victories}</td>
        </tr>
      ));
      console.log(scores);
      return (
        <div className="common-layout">
          <div className="title">
            <div className="title">
              <h1 className="title title__1">HALL</h1>

              <h1 className="title title__2">OF</h1>

              <h1 className="title title__3">FAME</h1>
            </div>
          </div>
          <div className="main-content table_container ">
            <table className="table">
              <tr className="table__header">
                <th>Position</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
              {moreRows}
            </table>
          </div>
          <div className="action">
            <div
              onClick={() => {
                history.push("/");
              }}
              className="btn btn--action"
            >
              Main menu
            </div>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}



export default ScoreboardComponent;
