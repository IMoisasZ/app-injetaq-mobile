import React, { useState } from 'react'
import {
	FlatList,
	StatusBar,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from 'react-native'
import SafeAreaView from '../../components/safeAreaView/SafeAreaView'

const DATA = [
	{
		id: 1,
		di: 4706,
		client: 'FIAT',
	},
	{
		id: 2,
		di: 4707,
		client: 'FIAT',
	},
	{
		id: 3,
		di: 4708,
		client: 'FIAT',
	},
	{
		id: 4,
		di: 4709,
		client: 'FIAT',
	},
	{
		id: 5,
		di: 4710,
		client: 'FIAT',
	},
]

const Item = ({ item, backgroundColor, textColor, navigation }) => (
	<View>
		<TouchableOpacity
			onPress={() => navigation.navigate('DI', { item })}
			style={[styles.item, backgroundColor]}>
			<Text style={[styles.title, textColor]}>DI: {item.di}</Text>
			<Text style={[styles.title, textColor]}>{item.client}</Text>
		</TouchableOpacity>
	</View>
)

const App = ({ navigation }) => {
	const [selectedId, setSelectedId] = useState(null)

	const renderItem = ({ item }) => {
		const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff'
		const color = item.id === selectedId ? 'white' : 'black'

		return (
			<Item
				item={item}
				onPress={() => setSelectedId(item.id)}
				backgroundColor={{ backgroundColor }}
				textColor={{ color }}
				navigation={navigation}
			/>
		)
	}

	return (
		<SafeAreaView style={styles.container}>
			<View>
				<TouchableOpacity
					style={styles.btn}
					onPress={() => navigation.navigate('Home')}>
					<Text>Sair</Text>
				</TouchableOpacity>
			</View>
			<FlatList
				data={DATA}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				extraData={selectedId}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
	},
	item: {
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 32,
	},
})

export default App
