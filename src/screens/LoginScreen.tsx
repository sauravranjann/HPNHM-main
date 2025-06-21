import { ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LoginPage from '../components/Login/LoginPage'
import { StyleSheet } from 'react-native'
import COLORS from '../constants/Color'

const LoginScreen = () => {
  return (
   
   
    <SafeAreaView style={styles.safeArea}>
         <ScrollView
           contentContainerStyle={styles.scrollContent}
           keyboardShouldPersistTaps="handled"
           showsVerticalScrollIndicator={false}
         >
             <LoginPage/>
         </ScrollView>
       </SafeAreaView>
   
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background, // background applied to whole screen
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20, // optional padding
    backgroundColor: COLORS.background,
  },
});