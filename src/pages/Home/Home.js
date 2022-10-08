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
					resizeMode='center'
				/>
			</View>
			<View style={styles.content}>
				<Text style={styles.text_welcome}>Bem vindo ao APP Injetaq DI</Text>
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
	container: {
		flex: 1,
		backgroundColor: '#2a2061',
	},
	title: {
		fontSize: 40,
		textAlign: 'center',
		color: '#fff',
		fontWeight: 'bold',
		marginTop: 30,
	},
	viewLogo: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: '80%',
	},
	content: {
		backgroundColor: '#fff',
		borderRadius: 20,
		alignItems: 'center',
	},
	text_welcome: {
		fontWeight: 'bold',
		fontSize: 18,
		marginTop: 20,
	},
	btn: {
		backgroundColor: '#2a2061',
		borderRadius: 10,
		marginVertical: 10,
		width: '50%',
	},
	text_btn: {
		color: '#fff',
		padding: 10,
		fontSize: 18,
		fontWeight: '800',
	},
})
