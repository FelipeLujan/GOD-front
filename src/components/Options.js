import paper from "../assets/paper.png";
import rock from "../assets/rock.png";
import scissors from "../assets/scissor.png";
import React from "react";

export function Options(props) {
    let{playerSelection, currentPlayer,currentSelection, error}= props
    return <div className="options-component">
        <h4>
            Select your move.
        </h4>
        <div className="options">

            <br/>
            <div className={`options__img ${currentSelection==="a"? "chosen":""}`}>
                <img src={rock} onClick={() => {
                    playerSelection(currentPlayer, "a")
                }} />
            </div>
            <div className={`options__img ${currentSelection==="b"? "chosen":""}`}>
                <img src={paper} onClick={() => {
                    playerSelection(currentPlayer, "b")
                }} />
            </div>
            <div className={`options__img ${currentSelection==="c"? "chosen":""}`}>
                <img src={scissors} onClick={() => {
                    playerSelection(currentPlayer, "c")
                }} />
            </div>


        </div>
        {error&&<h5 className="options__warning">
            It's dangerous to go alone. Pick one
        </h5>}
    </div>;
}
