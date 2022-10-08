import * as React from 'react'
import { View } from 'react-native'
import { Divider } from 'react-native-paper'

export default function MyDivider() {
	return (
		<View>
			<Divider
				bold={true}
				style={{ backgroundColor: '#dadada' }}
			/>
		</View>
	)
}
