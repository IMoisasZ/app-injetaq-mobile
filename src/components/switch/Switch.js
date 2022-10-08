import React from 'react'
import { View, Switch, Text, StyleSheet } from 'react-native'

export default function MySwitch({
	value,
	toggleOnChange,
	actived,
	labelName,
	disabled,
}) {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{labelName}</Text>
			<Switch
				trackColor={{ false: '#767577', true: '#81b0ff' }}
				thumbColor={actived ? '#f5dd4b' : '#f4f3f4'}
				ios_backgroundColor='#3e3e3e'
				onValueChange={toggleOnChange}
				value={value}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	label: {
		color: '#fff',
		fontWeight: 'bold',
		marginRight: 10,
	},
})
