import React from "react";
import "../Styles/CardGrid.css";
import fruitImages from "../Assets/Images";

const CardGrid = (props) => {
	return (
		<div className="grid-container">
			{props.randomFruits.map((fruit) => {
				return (
					<div className="grid-cell">
						<div>
							<img src={fruitImages[fruit]} alt={fruit} />
						</div>
						<p>{fruit.replace("_", " ")}</p>
					</div>
				);
			})}
		</div>
	);
};


export default CardGrid;
