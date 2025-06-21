import { StyleSheet } from "react-native";
import COLORS from "../../../constants/Color";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  mainHeadingContainer: {
    backgroundColor: COLORS.background,
    paddingTop:hp('2%'),
    alignItems: 'center',
    marginTop: hp('1%'),
    paddingBottom: hp('1%')
    
    
  },
  mainHeadingText: {
    color: COLORS.headingColor, // use the correct color from your constants
    fontSize: wp('6.5%'),
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: hp('4.5%'),
  },
});

export default styles;
