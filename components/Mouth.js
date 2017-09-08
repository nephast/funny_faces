import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

export default class Mouth extends Component {
  render() {
	return (
		<View style={localStyles.mouth}>
			
			</View>
	)

  }
}

const localStyles = StyleSheet.create({
  mouth: {
    width: 200,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 30,
    justifyContent: 'center',
	alignItems: 'center'
  }
});
