import React from 'react'
import Picker from '@ouroboros/react-native-picker'
import { StyleSheet } from 'react-native'

export default function Select({ value, handleOnchange }) {
	return (
		<Picker
			style={styles.picker}
			onChanged={handleOnchange}
			options={[
				{ value: 0, text: 'Selecione um tipo ...' },
				{ value: 1, text: 'Master' },
				{ value: 2, text: 'Administrador' },
				{ value: 3, text: 'Usuário' },
			]}
			value={value}
		/>
	)
}

const styles = StyleSheet.create({
	picker: {
		borderBottomWidth: 0.5,
		borderColor: '#fff',
		marginBottom: 20,
		padding: 5,
		color: '#fff',
		width: 300,
		textAlign: 'center',
		fontWeight: 'bold',
	},
})
