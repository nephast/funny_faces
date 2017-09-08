import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Animated
} from 'react-native';

export default class Eye extends Component {

	constructor(props) {
		super(props);
		this.state = {
			eyelidPosition: new Animated.Value(0)
		};
	}

	componentDidMount() {
		this.animatedEyelid()
	}

	animatedEyelid() {
		Animated.spring(this.state.eyelidPosition, {
			toValue: 1,
			duration: 600
		}).start(() => {
			Animated.timing(this.state.eyelidPosition, {
				toValue: 0
			}).start(() => {
				setTimeout(() => {
				this.animatedEyelid();				
				}, 1500)
			})
		});
	}

	render() {
		var eyelidStyles = [localStyles.eyelid];
		eyelidStyles.push({
			height: this.state.eyelidPosition.interpolate({
				inputRange: [0, 1],
				outputRange: [0, 60]
			})
		});

		var pupilStyle = [localStyles.pupil];

		if (this.props.color) {
			pupilStyle.push({
				backgroundColor: this.props.color
			});
		}

		return (
			<View style={localStyles.eye}>
				<View style={pupilStyle}>
					</View>
				<Animated.View style={eyelidStyles}>
					
					</Animated.View>
				</View>
		)

	}
}

const localStyles = StyleSheet.create({
	eye: {
		width: 60,
		height: 50,
		backgroundColor: 'white',
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden'
	},
	pupil: {
		width: 20,
		height: 10,
		backgroundColor: 'black',
		borderRadius: 30
	},
	eyelid: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		height: 10,
		backgroundColor: 'black',
		borderRadius: 30
	}

});