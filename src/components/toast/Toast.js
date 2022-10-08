import React from 'react'
import { View, StyleSheet, ToastAndroid, StatusBar } from 'react-native'
import Button from '../button/Button'

export default function MyToast({
	nameBtn,
	msg = 'msg toast default',
	handleOnPress,
	color,
}) {
	const showToast = () => {
		ToastAndroid.show(msg, ToastAndroid.SHORT)
	}

	return (
		<View style={styles.container}>
			<Button
				nameBtn={nameBtn}
				handleOnPress={() => {
					handleOnPress()
					showToast()
				}}
				color={color}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		paddingTop: StatusBar.currentHeight,
		// backgroundColor: '#888888',
		padding: 8,
	},
})
