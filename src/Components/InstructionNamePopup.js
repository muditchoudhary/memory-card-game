import React from "react";
import "../Styles/InstructionNamePopup.css";

const InstructionNamePopup = (props) => {
	const closePopup = () => {
		document.querySelector(".overlay").classList.remove("active");
	};
	const playGame = () => {
		if (props.playerName.trim() !== "") {
			// Close the pop up
			closePopup();
		} else {
			alert("Please! Enter Your Name.");
		}
	};
	return (
		<div className="overlay active" id="instruction-name-popup">
			<div className="popup-container">
				<div className="top">
					<h2>Instructions</h2>
					<p>
						Get points for choosing a card, but don't click on the
						same card more than once!
					</p>
				</div>
				<hr />
				<div className="mid">
					<label htmlFor="name">Enter Your Name</label>
					<input
						type="text"
						id="name"
						name="name"
						value={props.playerName}
						onChange={(e) => {
							props.setPlayerName(e.target.value);
						}}
						required
					/>
				</div>
				<div className="bottom">
					<button type="button" onClick={playGame}>
						Play
					</button>
				</div>
			</div>
		</div>
	);
};

export default InstructionNamePopup;
