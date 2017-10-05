import React from 'react'
import PropTypes from 'prop-types';

class ButtonCore extends React.Component {
	constructor(props) {
		super(props);

	}
	static propTypes = {
		title: PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired,
	}

	state = {
		hello: "Hello World"
	}

	render() {
		const { title, onClick } = this.props;
		const { hello } = this.state;
		return (
			<div>
				<span>{hello}</span>
				<Button
					onPress={onClick}
					title={title} />
			</div>
		);
	}
}

export default ButtonCore;