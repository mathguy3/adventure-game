import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		onPress: PropTypes.func.isRequired,
	};
	render() {
		const { title, onPress } = this.props;
		return <button onClick={onPress}>{title}</button>;
	}
}

export default Button;
