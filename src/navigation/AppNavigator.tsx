import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import ForgetScreen from '../screens/ForgetScreen';
import HomeScreen from '../screens/HomeScreen';




const Stack = createNativeStackNavigator();




const AppNavigator = () => {
  return (
    <>
    <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen name = "LoginScreen" component={LoginScreen}  options={{ headerShown: false }} /> 
             <Stack.Screen name = "ForgetScreen" component = {ForgetScreen}/>
             <Stack.Screen name = "HomeScreen" component = {HomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
    </>
    
  )
}

export default AppNavigator