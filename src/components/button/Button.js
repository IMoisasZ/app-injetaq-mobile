import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Button({ nameBtn, handleOnPress, color = 'btn' }) {
	return (
		<View>
			<TouchableOpacity
				onPress={handleOnPress}
				style={styles[color]}>
				<Text style={styles.text}>{nameBtn}</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	btn: {
		backgroundColor: '#4d4d4d',
		padding: 10,
		borderRadius: 5,
	},
	clear: {
		backgroundColor: '#008B8B',
		padding: 10,
		borderRadius: 5,
	},
	text: {
		color: '#fff',
		fontWeight: 'bold',
	},
})
