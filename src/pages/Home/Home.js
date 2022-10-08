import React, { useState } from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	StyleSheet,
} from 'react-native'

export default function Home() {
	const [click, setClick] = useState('')
	return (
		<View style={styles.container}>
			<Text>Lista de DI's</Text>
			{/* <View style={styles.content}>
				{listDI.map((di, index) => {
					return (
						<ScrollView StickyHeaderComponent={true}>
							<TouchableOpacity onPress={() => setClick(`Clicou na DI ${di}`)}>
								<Text key={index}>{di}</Text>
							</TouchableOpacity>
						</ScrollView>
					)
				})}
				<Text>{click}</Text>
			</View> */}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: '#2a2061',
	},
})
