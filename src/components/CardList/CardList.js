import React from "react";
import Card from '../Card/Card';

const CardList = ({ robots }) => {
  	const CardComponent = robots.map((robot, i) => {
  		return <Card key={i} id={i} robot={robot}/>
      });
    return (
        <div>
        	{CardComponent} 
        </div>
    );
};
export default CardList;