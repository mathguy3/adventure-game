import React, { Component } from "react";
import ActionButton from "./components/ActionButton";
import istyles from "./styles/App.js";
import { toast } from "../controllers/Helpers.js";
// react-native-view-import
// react-native-stylesheet-import

let styles = istyles;
// react-native-convert-styles

class App extends Component {
	handleButtonTap = e => {
		toast("Cheers!");
	};
	render() {
		return (
			<div style={styles.container}>
				<ActionButton onPress={this.handleButtonTap} title={"A toast!"} />
				<ActionButton onPress={this.handleButtonTap} title={"A toast!"} />
				<ActionButton onPress={this.handleButtonTap} title={"A toast!"} />
			</div>
		);
	}
}

export default App;
