import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default function Input({
	placeholder,
	value,
	keyboard,
	handleOnChange,
	securyText = false,
	colorPlaceHolder = '#dadada',
	typeInput,
}) {
	return (
		<TextInput
			style={styles.input}
			placeholder={placeholder}
			placeholderTextColor={colorPlaceHolder}
			value={value}
			keyboardType={keyboard}
			onChangeText={handleOnChange}
			secureTextEntry={securyText}
			textContentType={typeInput}
		/>
	)
}

const styles = StyleSheet.create({
	input: {
		borderBottomWidth: 0.5,
		borderBottomColor: '#fff',
		padding: 5,
		fontWeight: 'bold',
		width: 300,
		textAlign: 'center',
		marginBottom: 20,
		color: '#fff',
		textAlign: 'center',
	},
})
