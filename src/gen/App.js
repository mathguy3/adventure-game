import React, { Component } from "react";
import ActionButton from "./components/ActionButton";
import istyles from "./styles/App.js";
import { toast } from "../controllers/Helpers.js";
import { View } from 'react-native'; // react-native-view-import
import { StyleSheet } from 'react-native'; // react-native-stylesheet-import

let styles = istyles;
styles = StyleSheet.create(styles); // react-native-convert-styles

class App extends Component {
	handleButtonTap = e => {
		toast("Cheers!");
	};
	render() {
		return (
			<View style={styles.container}>
				<ActionButton onPress={this.handleButtonTap} title={"A toast!"} />
				<ActionButton onPress={this.handleButtonTap} title={"A toast!"} />
				<ActionButton onPress={this.handleButtonTap} title={"A toast!"} />
			</View>
		);
	}
}

export default App;
