import React from "react";
import PropTypes from "prop-types";
import istyles from "../styles/ActionButton.js";
import { StyleSheet } from 'react-native'; // react-native-stylesheet-import
import { View } from 'react-native'; // react-native-view-import
import { Button } from 'react-native'; // react-native-button-import
// react-button-import
let styles = istyles;
styles = StyleSheet.create(styles); // react-native-convert-styles

class ActionButton extends React.Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		onPress: PropTypes.func.isRequired,
	};

	handleOnPress = e => {
		// separated so you can do other things too
		this.props.onPress(e);
	};

	render() {
		const { title } = this.props;
		return (
			<View style={styles.actionButtonContainer}>
				<Button onPress={this.handleOnPress} title={title} />
			</View>
		);
	}
}

export default ActionButton;
