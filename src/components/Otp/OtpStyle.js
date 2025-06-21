import { StyleSheet } from 'react-native';
import COLORS from '../../../src/constants/Color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const OtpStyle = StyleSheet.create({
    container: {
   paddingTop : hp('2%'),
   paddingBottom: hp('2%'),
   
   
  },
  inputbox:{
     marginHorizontal: 2,
  }
});


export default OtpStyle;