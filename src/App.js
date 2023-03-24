import "./App.css";
import MainGame from "./Components/MainGame";
import { useState } from "react";
import { fruits as initFruitsList } from "./Data/fruitsData";

function App() {
	const [fruits, setFruits] = useState(initFruitsList);

	return (
		<div className="App">
			<MainGame fruits={fruits} />
		</div>
	);
}

export default App;
