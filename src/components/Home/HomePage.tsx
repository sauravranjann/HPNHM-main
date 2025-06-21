import { View, Text } from 'react-native'
import React from 'react'
import CameraScreen from '../Camera/CameraScreen'

const HomePage = () => {
  return (
    <View>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 }}>
            Welcome to the Camera App
        </Text>
      <CameraScreen/>
    </View>
  )
}

export default HomePage;