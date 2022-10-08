import React, { useState } from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	StyleSheet,
} from 'react-native'
import SafeAreaView from '../../components/safeAreaView/SafeAreaView'

export default function ForgotPassword() {
	const [user, setUser] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	return (
		<SafeAreaView>
			<View style={styles.content}>
				<Text style={styles.title}>Esqueci a senha</Text>

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
					placeholder='Digite a nova senha'
					placeholderTextColor='#dadada'
					value={password}
					keyboardType='default'
					onChangeText={(e) => setPassword(e.valueOf())}
					secureTextEntry={true}
				/>
				<TextInput
					style={styles.input}
					placeholder='Confirme a senha'
					placeholderTextColor='#dadada'
					value={confirmPassword}
					keyboardType='default'
					onChangeText={(e) => setConfirmPassword(e.valueOf())}
					secureTextEntry={true}
				/>
				<TouchableOpacity style={styles.btn_change_password}>
					<Text style={styles.text_btn}>Alterar a senha</Text>
				</TouchableOpacity>
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
		width: '100%',
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
	btn_change_password: {
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
