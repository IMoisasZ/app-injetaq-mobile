import React, { useState, useEffect } from 'react'
import { FlatList, View, Text, Button, StyleSheet } from 'react-native'
import Input from '../../components/input/Input'
import MySwitch from '../../components/switch/Switch'
import Divider from '../../components/divider/Divider'
import MyToast from '../../components/toast/Toast'
import ClientItemList from './ClientItemList'
import api from '../../api/api'

export default function Client({ navigation, msg }) {
	const [id, setId] = useState('')
	const [client, setClient] = useState('')
	const [actived, setActived] = useState(true)
	const [listClients, setListClients] = useState([])
	const [statusMsg, setStatusMsg] = useState('')
	const [nameBtn, setNameBtn] = useState('Incluir')

	// get all clients
	const allClients = async () => {
		try {
			const response = await api.get('client')
			setListClients(response.data)
		} catch (error) {
			console.log(error.data)
		}
	}

	useEffect(() => {
		const execute = async () => {
			await allClients()
		}
		execute()
	}, [])

	// create a new client
	const createClient = async () => {
		if (!client) {
			return alert('Cliente não informado!')
		}
		if (nameBtn === 'Incluir') {
			try {
				await api.post('client', {
					description: client,
					actived,
				})
				setStatusMsg('Cliente cadastrado com sucesso!')
				handleClear()
			} catch (error) {
				setStatusMsg('Algo deu errado!')
			}
		} else {
			try {
				await api.patch('client', {
					id,
					description: client,
					actived,
				})
				setStatusMsg('Cliente alterado com sucesso!')
				handleClear()
			} catch (error) {
				setStatusMsg('Algo deu errado!')
			}
		}
	}

	// get client to edit
	const handleEdit = async (id) => {
		const response = await api.get(`client/${id}`)
		setId(response.data.id)
		setClient(response.data.description)
		setActived(response.data.actived)
		setNameBtn('Editar')
	}

	// clear all fields
	const handleClear = () => {
		setClient('')
		setActived(true)
		setNameBtn('Incluir')
		setStatusMsg('')
		allClients()
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Cadastro de Clientes</Text>
			<View style={styles.content}>
				<Input
					placeholder='Nome do cliente'
					value={client}
					handleOnChange={(e) => setClient(e.valueOf())}
				/>
				<MySwitch
					style={styles.switch}
					value={actived}
					toggleOnChange={() => setActived((actived) => !actived)}
					actived={actived && true}
					labelName='Ativo'
				/>
				{nameBtn === 'Incluir' ? (
					<MyToast
						handleOnPress={createClient}
						nameBtn={nameBtn}
						msg={statusMsg}
					/>
				) : (
					<View style={styles.btns_view}>
						<MyToast
							handleOnPress={createClient}
							nameBtn={nameBtn}
							msg={statusMsg}
							color='btn'
						/>

						<MyToast
							handleOnPress={handleClear}
							nameBtn='Limpar'
							color='clear'
							msg=''
						/>
					</View>
				)}
			</View>
			<Divider />
			<Text style={styles.subTitle}>Lista de Clientes Cadastrados</Text>
			<Divider />
			<FlatList
				data={listClients}
				keyExtractor={(item) => String(item.id)}
				renderItem={({ item }) => (
					<ClientItemList
						data={item}
						handlePress={() => handleEdit(item.id)}
					/>
				)}
			/>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: '#2a2061',
	},
	title: {
		fontSize: 30,
		textAlign: 'center',
		color: '#fff',
		fontWeight: 'bold',
		marginVertical: 20,
	},
	content: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	subTitle: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 15,
		textAlign: 'center',
		paddingVertical: 5,
	},
	containerListClients: {
		flexDirection: 'row',
	},
	btns_view: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '50%',
	},
})
