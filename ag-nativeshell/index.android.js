import React, { Component } from "react";
import { AppRegistry } from "react-native";
import App from "./src/gen/App.js";

export default class nativeshell extends Component {
	render() {
		return <App />;
	}
}

AppRegistry.registerComponent("nativeshell", () => nativeshell);
