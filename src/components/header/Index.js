import React, { useState } from 'react'
import {
	View,
	StyleSheet,
	Text,
	StatusBar,
	TouchableOpacity,
} from 'react-native'
import SafeAreaViewAndroid from '../../components/safeAreaView/Index'
import { Feather } from '@expo/vector-icons'

const statusbarHeigth = StatusBar.currentHeight
	? StatusBar.currentHeight + 22
	: 64

export default function Header() {
	return <SafeAreaViewAndroid style={styles.container}></SafeAreaViewAndroid>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'flex-start',
	},
	content: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	userName: {
		fontSize: 18,
		color: '#fff',
		fontWeight: 'bold',
	},
	buttonUser: {
		height: 44,
		width: 44,
		backgroundColor: 'rgba(255,255,255,0.5)',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 44 / 2,
	},
	logOut: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	logOutText: {
		color: '#fff',
		fontWeight: 'bold',
	},
})
