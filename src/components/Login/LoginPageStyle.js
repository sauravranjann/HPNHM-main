import { StyleSheet } from 'react-native';
import COLORS from '../../../src/constants/Color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const styles = StyleSheet.create({
  container: {
   backgroundColor:COLORS.background,
  },
  forgot: {
    fontWeight: 'bold',
    marginTop: hp('2%'),
    color: COLORS.secondary,
    fontSize: wp('3.5%'),
    textAlign: 'center',
    marginVertical: hp('1%'),
  },
  logo: {
  width: wp('40%'),           // 30% of screen width
  height: hp('20%'),          // 15% of screen height
  resizeMode: 'contain',      // Keeps aspect ratio
  alignSelf: 'center',        // Center logo horizontally
  marginVertical: hp('2%'),   // Vertical spacing
},

  loginText: {
    fontSize: wp('6%'),
    color: COLORS.tittleColor,
    textAlign: 'center',
    marginVertical: hp('2%'),
   paddingTop: hp('2%')
  },
});


export default styles;

