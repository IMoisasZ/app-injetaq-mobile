import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import SafeAreaView from '../../components/safeAreaView/SafeAreaView'

export default function Home({ navigation }) {
	return (
		<SafeAreaView>
			<Text style={styles.title}>APP INJETAQ</Text>
			<View style={styles.viewLogo}>
				<Image
					style={styles.image}
					source={require('../../../assets/images/logo_injetaq.jpg')}
					resizeMode='contain'
				/>
			</View>
			<View style={styles.content}>
				<View style={styles.view_btns}>
					<TouchableOpacity
						style={styles.btn}
						onPress={() => navigation.navigate('Login')}>
						<Text style={styles.text_btn}>Entrar</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	title: {
		fontSize: 30,
		textAlign: 'center',
		color: '#fff',
		fontWeight: 'bold',
	},
	viewLogo: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		margin: 0,
		padding: 0
	},
	image: {
		width: '50%',
		height: '50%',
		margin: 0,
		padding: 0
	},
	content: {
		borderRadius: 20,
		alignItems: 'center',
	},
	btn: {
		backgroundColor: '#dadada',
		borderRadius: 10,
	},
	text_btn: {
		color: '#2a2061',
		padding: 10,
		fontSize: 18,
		fontWeight: '800',
	},
})
