import React, { Component } from 'react';
import Eye from './Eye';
import Mouth from './Mouth';

import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	Dimensions,
} from 'react-native';

export default class App extends Component {
	render() {
		return (
			<View style={localStyles.container}>
				<StatusBar hidden = {true}/>
				<View style={localStyles.eyes}>	
					<Eye color='red'/>
					<Eye color='black' />	
							
					</View>	
					<Mouth/>		
			</View>
		)

	}
}

const localStyles = StyleSheet.create({
	container: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-around",
		flex: 1,
		backgroundColor: 'yellow'
	},
	eyes: {
		flexDirection: 'row',
		justifyContent: "space-around",
		width: Dimensions.get('window').width
	}

});