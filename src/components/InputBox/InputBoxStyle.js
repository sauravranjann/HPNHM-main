import { StyleSheet } from 'react-native';
import COLORS from '../../../src/constants/Color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    paddingHorizontal: wp('5%'), // Equal horizontal padding for left/right
    paddingTop: hp('3%'),
    justifyContent: 'center',
  },
  label: {
    fontSize: wp('4.2%'), // Responsive font size (~16px)
    color: COLORS.textDark || '#000',
    marginBottom: hp('2%'),
    fontWeight: '500',
  },
  input: {
    height: hp('6.5%'), // Input height responsive
    borderColor: COLORS.inputBorder,
    borderWidth: 1,
    borderRadius: wp('2%'), // Responsive border radius
    paddingHorizontal: wp('4%'), // Inner padding
    fontSize: wp('4.2%'), 
    color: COLORS.textDark,
    backgroundColor: COLORS.inputBackground || '#f9f9f9',
    placeholderTextColor: COLORS.textDark || '#000',
   
  },
});

export default styles;

