import { StyleSheet } from 'react-native';
import COLORS from '../../constants/Color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ForgetPageStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
  },
 loginText: {
    fontSize: wp('6%'),
    color: COLORS.tittleColor,
    textAlign: 'center',
    marginVertical: hp('2%'),
   paddingTop: hp('2%')
  },
 
});

export default ForgetPageStyles;
