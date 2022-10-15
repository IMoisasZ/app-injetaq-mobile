import React, { useState } from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	StyleSheet,
} from 'react-native'
import SafeAreaView from '../../components/safeAreaView/SafeAreaView'

export default function Login({ navigation }) {
	const [user, setUser] = useState('')
	const [password, setPassword] = useState('')

	// login to the app
	const login = () => {
		navigation.navigate('Home')
	}

	return (
		<SafeAreaView>
			<View style={styles.container}>
				<Text style={styles.title}>Login</Text>

				<TextInput
					style={styles.input}
					placeholder='Digite seu usuário'
					placeholderTextColor='#dadada'
					value={user}
					keyboardType='default'
					onChangeText={(e) => setUser(e.valueOf())}
				/>
				<TextInput
					style={styles.input}
					placeholder='Digite sua senha'
					placeholderTextColor='#dadada'
					value={password}
					keyboardType='visible-password'
					onChangeText={(e) => setPassword(e.valueOf())}
					secureTextEntry={true}
				/>

				<View style={styles.view_btns}>
					<TouchableOpacity
						style={styles.enter}
						onPress={() => navigation.navigate('ListDI')}>
						<Text style={styles.text_btn}>Entrar</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.btn_forgot_password}
						onPress={() => navigation.navigate('ForgotPassword')}>
						<Text style={styles.text_btn}>Esqueci a senha</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	content: {
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 50,
	},
	title: {
		fontSize: 30,
		color: '#000',
		textAlign: 'center',
		backgroundColor: '#dadada',
		fontWeight: 'bold',
		paddingVertical: 10,
		marginBottom: 30,
		borderRadius: 5,
	},
	input: {
		borderBottomWidth: 0.5,
		borderBottomColor: '#fff',
		padding: 5,
		fontWeight: 'bold',
		width: '100%',
		textAlign: 'center',
		marginVertical: 30,
		color: '#fff',
		textAlign: 'center',
	},
	view_btns: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 60,
	},
	enter: {
		backgroundColor: '#dadada',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
	},
	btn_forgot_password: {
		backgroundColor: '#dadada',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
	},
	text_btn: {
		padding: 10,
		fontWeight: '700',
		textAlign: 'center',
	},
})
