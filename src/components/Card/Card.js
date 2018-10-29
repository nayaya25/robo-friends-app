import React from "react";
import './Card.css'

const Card = ({robot}) => {
    return (
        <div className={"card bg-light-green dib br3 grow shadow-5 pa3 ma2"}>
            <img alt="robotic pic" src={`https://robohash.org/${robot.id}?200x200`}/>
            <h2>{robot.name}</h2>
            <p>{robot.email}</p>
        </div>
    );
};
export default Card;