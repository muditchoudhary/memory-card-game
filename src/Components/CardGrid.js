import React from "react";
import "../Styles/CardGrid.css";
import fruitImages from "../Assets/Images";
import { v4 as uuidv4 } from "uuid";

const CardGrid = (props) => {
	const clickOnFruit = (fruitName) => {
		if (props.imageClickCount[fruitName] < 1) {
			// Increment the count of the fruit in hashmap
			props.setImageClickCount({
				...props.imageClickCount,
				[fruitName]: (props.imageClickCount[fruitName] += 1),
			});
			// Set the new random fruits array to new random array

			props.setRandomFruits(
				props.makeRandomArr(props.fruits, props.fruits.length, props.K)
			);
		} else {
			console.log("game over!!");
		}
	};

	return (
		<div className="grid-container">
			{props.randomFruits.map((fruit) => {
				return (
					<div
						className="grid-cell"
						key={uuidv4()}
						onClick={(e) => {
							clickOnFruit(e.target.alt);
						}}
					>
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
