import React from "react";
import "../Styles/GameOverPopup.css";
const GameOverPopup = (props) => {
	const playAgain = () => {
		document.querySelector(".gameover-overlay").classList.remove("active");
		props.resetGame();
	};
	return (
		<div className="gameover-overlay" id="gameover-popup">
			<div className="game-over-popup-container">
				<p>Game Over!! You clicked on the same card twice!</p>
				<button type="button" onClick={playAgain}>
					Play Again
				</button>
			</div>
		</div>
	);
};

export default GameOverPopup;
