import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

interface TimerClockProps {
  duration?: number;           // default: 60 seconds
  onResend?: () => void;       // resend OTP handler
  autoStart?: boolean;         // should timer start on load
}

const TimerClock: React.FC<TimerClockProps> = ({
  duration = 60,
  onResend,
  autoStart = true,
}) => {
  const [secondsLeft, setSecondsLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(autoStart);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft(prev => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, secondsLeft]);

  const handleResend = () => {
    setSecondsLeft(duration);  // reset timer
    setIsRunning(true);        // restart timer
    onResend?.();              // trigger resend callback
    
  };

  return (
    <View style={styles.container}>
      {secondsLeft > 0 ? (
        <Text style={styles.timerText}>
          Resend OTP in {secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft} sec
        </Text>
      ) : (
        <TouchableOpacity onPress={handleResend}>
          <Text style={styles.resendText}>Resend OTP</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TimerClock;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  timerText: {
    fontSize: 14,
    color: '#666',
  },
  resendText: {
    fontSize: 16,
    color: '#007bff',
    fontWeight: '600',
  },
});
