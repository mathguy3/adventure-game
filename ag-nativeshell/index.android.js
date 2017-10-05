import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	ToastAndroid
} from 'react-native';
import ButtonCore from './src/components/ButtonCore'

export default class nativeshell extends Component {
	handleButtonTap = () => {
		ToastAndroid.showWithGravity('A pikachu appeared nearby !', ToastAndroid.SHORT, ToastAndroid.CENTER);
	}
	render() {
		return (
			<View style={styles.container}>
				<ButtonCore
					onClick={this.handleButtonTap}
					title={'hi there'}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

AppRegistry.registerComponent('nativeshell', () => nativeshell);
