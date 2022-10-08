import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SafeAreaView from '../../components/safeAreaView/SafeAreaView'

export default function DI({ route }) {
	const data = route.params.item
	return (
		<SafeAreaView>
			<View>
				<Text>DI: {data.di}</Text>
				<Text>Cliente: {data.client}</Text>
			</View>
		</SafeAreaView>
	)
}
