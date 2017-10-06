import React from "react";
import PropTypes from "prop-types";
import istyles from "../styles/ActionButton.js";
// react-native-stylesheet-import
// react-native-view-import
// react-native-button-import
import Button from "../../components/Button" // react-button-import
let styles = istyles;
// react-native-convert-styles

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
			<div style={styles.actionButtonContainer}>
				<Button onPress={this.handleOnPress} title={title} />
			</div>
		);
	}
}

export default ActionButton;
