import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { OtpInput } from "react-native-otp-entry";
import OtpStyle from './OtpStyle'
import PrimaryButton from '../Button/PrimaryButton/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

// Define RootStackParamList or import it from your navigation types
type RootStackParamList = {
  HomeScreen: undefined;
  // Add other screens here as needed
};

type OtpProps = {
  reset: boolean;
};

const Otp: React.FC<OtpProps> = ({ reset }) => {
  const [otp, setOtp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  // Generate a key that changes when reset changes
  const inputKey = reset ? 'reset-true' : 'reset-false';

  useEffect(() => {
    setOtp(''); // Clear OTP when reset changes
  }, [reset]);

  const handleOtpFilled = async (filledOtp: string) => {
    setOtp(filledOtp);
  };

  const handleSubmitOtp = async (otpValue: string) => {
    try {
      setIsSubmitting(true);
      navigation.navigate('HomeScreen');
    } catch (error) {
      // Handle error
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={OtpStyle.container} >
      <OtpInput
        key={inputKey} // <-- Add this line// This will force the component to re-render when reset changes
        numberOfDigits={4}
        focusColor="blue"
        placeholder="*"
        type="numeric"
        onTextChange={setOtp}
        onFilled={handleOtpFilled}
        theme={{
          containerStyle: OtpStyle.container,
          inputsContainerStyle: OtpStyle.inputbox,
        }}
      />

      {otp.length === 4 && (
        <PrimaryButton 
          title={isSubmitting ? 'Verifying...' : 'Submit OTP'}
          onPress={() => handleSubmitOtp(otp)}
          disabled={isSubmitting}
        />
      )}
    </View>
  )
};

export default Otp