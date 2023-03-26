import "../Styles/MainGame.css";
import CardGrid from "./CardGrid";

const MainGame = (props) => {
	return (
		<div className="Main-Game">
			<div className="header">
				<div className="hdr-child-first">
					<p>Your Score:</p>
					<p>{props.playerScore}</p>
				</div>
				<div className="hdr-child-second">
					<p>Memory Game</p>
				</div>
				<div className="her-child-third">
					<p>Best Score:</p>
					<p>{props.bestScore}</p>
				</div>
			</div>
			<div className="box">
				<CardGrid
					randomFruits={props.randomFruits}
					setRandomFruits={props.setRandomFruits}
					imageClickCount={props.imageClickCount}
					setImageClickCount={props.setImageClickCount}
					makeRandomArr={props.makeRandomArr}
					fruits={props.fruits}
					randomArrLen={props.randomArrLen}
					playerScore={props.playerScore}
					setPlayerScore={props.setPlayerScore}
					bestScore={props.bestScore}
					setBestScore={props.setBestScore}
				/>
			</div>
		</div>
	);
};

export default MainGame;
