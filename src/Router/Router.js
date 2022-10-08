import * as React from 'react'
import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword'
import ListDI from '../pages/DI/ListDI'
import DI from '../pages/DI/DI'

const Stack = createNativeStackNavigator()

export default function Router() {
	return (
		<NavigationContainer>
			<StatusBar backgroundColor={'#2a2061'} />
			<Stack.Navigator
				initialRouteName='Home'
				useLegacyImplementation
				screenOptions={{
					headerStyle: {
						backgroundColor: '#2a2061',
					},
				}}>
				<Stack.Screen
					name='Home'
					component={Home}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name='Login'
					component={Login}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name='ForgotPassword'
					component={ForgotPassword}
				/>
				<Stack.Screen
					name='ListDI'
					component={ListDI}
				/>
				<Stack.Screen
					name='DI'
					component={DI}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
