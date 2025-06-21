import React from 'react'
import ForgetPage from '../components/Forget/ForgetPage'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, StyleSheet } from 'react-native'
import COLORS from '../constants/Color'
import HomePage from '../components/Home/HomePage'


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
       <HomePage/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen;


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