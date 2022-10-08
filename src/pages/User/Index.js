import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import SafeAreaViewAndroid from '../../components/safeAreaView/Index'
import Input from '../../components/input/Input'
import Select from '../../components/select/Index'
import Button from '../../components/button/Button'
import Spinner from '../../components/spinner/Spinner'
import api from '../../api/api'
import { color } from 'react-native-reanimated'

export default function Login({ navigation }) {
	const [name, setName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [msg, setMsg] = useState('')
	const [loading, setLoading] = useState(false)

	// validation user
	const validationUser = () => {
		if (!name) {
			setMsg({ type: 'error', msg: 'Nome não informado' })
			return false
		} else if (!lastName) {
			setMsg({ type: 'error', msg: 'Sobrenome não informado' })
			return false
		} else if (!email) {
			setMsg({ type: 'error', msg: 'Email não informado' })
			return false
		} else if (!password) {
			setMsg({ type: 'error', msg: 'Senha não informada!' })
			return false
		} else if (!confirmPassword) {
			setMsg({ type: 'error', msg: 'Confimração de senha não informada!' })
			return false
		} else {
			setMsg('')
			return true
		}
	}

	// create user
	const createUser = async () => {
		if (validationUser()) {
			try {
				await api.post('user', {
					name,
					lastName,
					email,
					role: 3,
					password,
					confirmPassword,
					actived: true,
				})
				setMsg({ type: 'success', msg: 'Usuário cadastrado com sucesso!' })
				setTimeout(() => {
					setLoading(true)
				}, 0.5)
				setTimeout(() => {
					handleClear()
					navigation.navigate('Login')
				}, 5000)
			} catch (error) {
				console.log(error)
			}
		}
	}

	// clear fields
	const handleClear = () => {
		setName('')
		setLastName('')
		setEmail('')
		setPassword('')
		setConfirmPassword('')
		setMsg('')
		setLoading(false)
	}

	return (
		<SafeAreaViewAndroid>
			<View style={styles.container}>
				<View style={styles.viewLogo}>
					<Text style={styles.title}>Cadastro de Usuário</Text>
				</View>
				<View style={styles.content}>
					<Input
						placeholder='Nome'
						value={name}
						handleOnChange={(e) => setName(e.valueOf())}
					/>
					<Input
						placeholder='Sobrenome'
						value={lastName}
						handleOnChange={(e) => setLastName(e.valueOf())}
					/>
					<Input
						placeholder='Email'
						value={email}
						handleOnChange={(e) => setEmail(e.valueOf())}
						typeInput='emailAddress'
					/>
					{loading ? <Spinner /> : ''}
					<Input
						placeholder='Senha'
						value={password}
						handleOnChange={(e) => setPassword(e.valueOf())}
						securyText={true}
					/>
					<Input
						placeholder='Confirme a senha'
						value={confirmPassword}
						handleOnChange={(e) => setConfirmPassword(e.valueOf())}
						securyText={true}
					/>
					<View style={{ marginTop: 30 }}>
						<Button
							nameBtn='Incluir'
							handleOnPress={createUser}
						/>
					</View>
				</View>
			</View>
			{msg.type === 'error' && <Text style={styles.text_error}>{msg.msg}</Text>}
			{msg.type === 'success' && (
				<Text style={styles.text_success}>{msg.msg}</Text>
			)}
		</SafeAreaViewAndroid>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		backgroundColor: '#2a2061',
	},
	content: {
		justifyContent: 'center',
		alignItems: 'center',
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
		marginVertical: 20,
	},
	logo: {
		width: 150,
		height: 113,
	},
	text_error: {
		textAlign: 'center',
		backgroundColor: '#FF6347',
		color: '#fff',
		fontWeight: 'bold',
	},
	text_success: {
		textAlign: 'center',
		backgroundColor: '#228B22',
		color: '#fff',
		fontWeight: 'bold',
	},
})
