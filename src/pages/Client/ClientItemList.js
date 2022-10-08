import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import Switch from '../../components/switch/Switch'
import { MaterialIcons } from '@expo/vector-icons/'

export default function ClientItemList({ data, handlePress }) {
	return (
		<View style={styles.item}>
			<View style={styles.view_edit}>
				<TouchableOpacity
					style={styles.btn}
					onPress={handlePress}>
					<Text style={styles.title}>{data.description}</Text>
					<View>
						<MaterialIcons
							name='mode-edit'
							size={32}
							color={'orange'}
						/>
					</View>
					<Text style={styles.text_btn}>Editar</Text>
				</TouchableOpacity>
			</View>
			<Switch
				actived={data.actived && true}
				labelName={data.actived ? 'Ativado' : 'Desativado'}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		backgroundColor: '#6A5ACD',
		marginVertical: 5,
		borderRadius: 5,
	},
	title: {
		fontSize: 20,
	},
	view_edit: {
		alignItems: 'flex-start',
	},
	text_btn: {
		color: '#fff',
		fontWeight: '600',
	},
	btn: {
		alignItems: 'flex-start',
	},
})
