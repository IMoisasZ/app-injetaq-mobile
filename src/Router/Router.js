import * as React from 'react'
import { StatusBar, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import User from '../pages/User/Index'
import Client from '../pages/Client/Client'

const Drawer = createDrawerNavigator()

export default function Router() {
	return (
		<NavigationContainer>
			<StatusBar backgroundColor={'#2a2061'} />
			<Drawer.Navigator
				initialRouteName='Login'
				useLegacyImplementation
				screenOptions={{
					drawerStyle: {
						backgroundColor: '#2a2061',
					},
					drawerLabelStyle: {
						color: '#fff',
					},
					headerTitleStyle: {
						color: '#fff',
					},
					headerTransparent: false,
					headerStyle: {
						backgroundColor: '#2a2061',
						elevation: 0,
					},
					headerShown: true,
				}}>
				<Drawer.Screen
					name='Home'
					component={Home}
				/>
				<Drawer.Screen
					name='Login'
					component={Login}
				/>
				<Drawer.Screen
					name='User'
					component={User}
				/>
				<Drawer.Screen
					name='Cliente'
					component={Client}
					headerShown={true}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	)
}
