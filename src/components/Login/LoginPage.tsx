import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import InputBox from '../InputBox/InputBox';
import PrimaryButton from '../Button/PrimaryButton/PrimaryButton';
import styles from './LoginPageStyle';
import MainHeading from '../Heading/MainHeading/MainHeading';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { useReducedMotion } from 'react-native-reanimated';


// Define RootStackParamList if not already defined or import it from your navigation types
type RootStackParamList = {

  ForgetScreen: undefined;
  HomeScreen: undefined;
  // add other screens here as needed
};

// Removed duplicate LoginPage declaration and hook usage above


const LoginPage = () => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const gotoForgetScreen = () => {
    navigation.navigate('ForgetScreen')
    
  }
const gotoHomeScreen = async () => {
  if (mobile.length === 10 && password.length > 0) {
    //const uri= 'https://umbraco.com/knowledge-base/http-status-codes/'; // Replace with your actual API endpoint
    const uri = 'https://api.eklavyaastrology.com/users/api/user/v1/token';
    const headers = {
      'Content-Type': 'application/json',
      'X-Requested-From': 'app',
      'X-channel-id': 'APP',
      'Project': 'NHM'
    };
    const body = {
      clientId: mobile,
      clientSecret: password,
    };

    try {
      const response = await fetch(uri, {
        method: 'POST', 
        headers: headers,
        body: JSON.stringify(body),
      });
      const data = await response.json();

      console.log('API status:', response.status);

      if (response.status === 200) {
        navigation.navigate('HomeScreen');
      } else {
        console.log('Login failed with status:', response.status);
      }
    } catch (error) {
      console.log('API error:', error);
    }
  }
};
return (
  <View style={styles.container}>
      <ScrollView>
      <MainHeading />
      <Text style={styles.loginText}>Login</Text>

      <InputBox
        label="Mobile Number"
        placeholder="+91 Enter Mobile Number"
        value={mobile}
        onChangeText={(text) => {
          if (text.length <= 10 && /^[0-9]*$/.test(text)) {
            setMobile(text);
          }
        }}
        keyboardType="phone-pad"
      
      />

      <InputBox
        label="Password"
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity>
        <Text style={styles.forgot} onPress={gotoForgetScreen}>Forgot Password?</Text>
      </TouchableOpacity>

      <PrimaryButton title="LOGIN" onPress={gotoHomeScreen} />



      <Image
        source={require('../../../assests/Images/LoginPagelogo.png')} style={styles.logo} resizeMode="contain"
      />
</ScrollView>
    </View>
  );
};

export default LoginPage;
