import React from 'react'
import { AppRegistry, View, Text, Button } from 'react-native'; // -- react-native-import
import PropTypes from 'prop-types';

class ButtonCore extends React.Component {
	constructor(props){
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
			<View>
				<Text>{ hello }</Text>
				<Button
					onPress={onClick}
					title = {title} />
			</View>
		);
	}
}

export default ButtonCore;