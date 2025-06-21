import { View, Text } from 'react-native'
import React from 'react'
import  styles  from './MainHeadingStyle'



const MainHeading = () => {
  return (
    <View style={styles.mainHeadingContainer}>
     <Text style={styles.mainHeadingText}> 
        Mukhya Mantri {'\n'} Bal Suposhan Yojana
     </Text>
    </View>
  )
}

export default MainHeading

