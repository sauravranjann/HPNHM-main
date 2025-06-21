import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import ForgetPage from '../components/Forget/ForgetPage';
import { ScrollView } from 'react-native-gesture-handler';
import COLORS from '../constants/Color';

const ForgetScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <ForgetPage />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgetScreen;

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
