import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import COLOR from '../../../constants/Color';

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLOR.primary || '#007bff',
    paddingVertical: hp('1.8%'),
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp('2%'),
   marginHorizontal: wp('6%'),
   
  },
  buttonText: {
    color: '#fff',
    fontSize: wp('4.2%'),
    fontWeight: '600',
  },
  disabled: {
    backgroundColor: '#aaa',
  },
});

export default styles;
