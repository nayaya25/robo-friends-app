import React from "react";
import './Card.css'

const Card = props => {
    return (

        <div className={"card bg-light-green dib br3 grow shadow-5 pa3 ma2"}>
            <img alt="robot pic" src={''}/>
            <h2>{props.robot.name}</h2>
            <p>{props.robot.email}</p>
        </div>
    );
};
export default Card;