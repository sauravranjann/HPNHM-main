import { View, Text } from 'react-native';
import React, { useState } from 'react';
import MainHeading from '../Heading/MainHeading/MainHeading';
import InputBox from '../InputBox/InputBox';
import Otp from '../Otp/Otp';
import ForgetPageStyles from './ForgetPageStyle';
import TimerClock from '../TimerClock/TimerClock';
import PrimaryButton from '../Button/PrimaryButton/PrimaryButton';

const ForgetPage = () => {
  const [number, setNumber] = useState('');
  const [showOtpSection, setShowOtpSection] = useState(false);
  const [inputnumBox, setInputnumBox] = useState(true);
  const [resetOtp, setResetOtp] = useState(false);

  const handleSendOtp = () => {
    setShowOtpSection(true);
    setInputnumBox(false);
    setResetOtp(false); // Ensure OTP is not reset on first show
  };

  const handleResendOtp = () => {
    setResetOtp(prev => !prev); // Toggle to trigger reset in Otp component
    console.log('Resending OTP...');
  };

  return (
    <View style={ForgetPageStyles.container}>
      <MainHeading />
      <Text style={ForgetPageStyles.loginText}>Login</Text>
      <InputBox
        label="Mobile Number"
        placeholder="Enter Your Mobile Number"
        value={number}
        onChangeText={setNumber}
        keyboardType="numeric"
        editable={inputnumBox}
      />

      {number.length === 10 && !showOtpSection && (
        <PrimaryButton title="Send Otp" onPress={handleSendOtp} />
      )}

      {showOtpSection && (
        <>
          <Otp reset={resetOtp} />
          <TimerClock
            duration={12}
            autoStart={true}
            onResend={handleResendOtp}
          />
        </>
      )}
    </View>
  );
};

export default ForgetPage;