import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function SafeAreaViewAndroid({ children }) {
	return <View style={styles.AndroidSafeArea}>{children}</View>
}

const styles = StyleSheet.create({
	AndroidSafeArea: {
		flex: 1,
		backgroundColor: 'white',
	},
})
