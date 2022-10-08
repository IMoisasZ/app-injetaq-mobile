import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import SafeAreaViewAndroid from '../../components/safeAreaView/Index'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'

export default function Login({ navigation }) {
	const [email, setEmail] = useState('')
	const [passWord, setPassword] = useState('')

	// login to the app
	const login = () => {
		navigation.navigate('Home')
	}

	return (
		<SafeAreaViewAndroid>
			<View style={styles.container}>
				<View style={styles.viewLogo}>
					<Image
						style={styles.logo}
						source={require('../../../assets/images/logo_injetaq.jpg')}
					/>
					<Text style={styles.title}>Login</Text>
				</View>
				<View style={styles.content}>
					<Input
						placeholder='Email'
						value={email}
						handleOnChange={(e) => setEmail(e.valueOf())}
					/>
					<Input
						placeholder='Senha'
						value={passWord}
						handleOnChange={(e) => setPassword(e.valueOf())}
						securyText={true}
					/>
					<View style={styles.viewBtns}>
						<Button
							nameBtn='Entrar'
							handleOnPress={login}
						/>
						<Button
							nameBtn='Cadastrar-se'
							handleOnPress={() => navigation.navigate('User')}
						/>
					</View>
				</View>
			</View>
		</SafeAreaViewAndroid>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		backgroundColor: '#2a2061',
		justifyContent: 'center',
	},
	content: {
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 50,
	},
	title: {
		fontSize: 30,
		color: '#fff',
		textAlign: 'center',
		marginVertical: 20,
	},
	viewLogo: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo: {
		width: 150,
		height: 113,
	},
	viewBtns: {
		width: 300,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
})
