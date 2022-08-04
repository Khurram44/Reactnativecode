import styled from "styled-components/native";
import { ImageBackground, View } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constants";


export const MainContainer = styled.ScrollView`
background-color: ${COLORS.secondary}; 
flex: 1;
padding-left: ${wp(5)};
padding-right: ${wp(5)};
`
export const Heading = styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 45px;
line-height: 68px;
color:  #E2FEEF;
margin-top: ${hp("12%")};
`
export const SubHeading = styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 36px;
color: #E2FEEF;
margin-top: -${hp("1%")};
`
export const ExtraText = styled.Text`
margin-top: ${hp("5%")};
font-family: 'Poppins';
width: ${wp("80%")};
font-style: normal;
font-weight: 400;
font-size: 16px;
color: #BCEDD5;
`
export const Illustration = styled.Image`
alignSelf: center;
margin-top: ${hp("15%")};
`
export const Dots = styled.Image`
alignSelf: center;
margin-top: ${hp("4%")};
`
export const AppBtn = styled.TouchableOpacity`
width: ${wp("80%")};
height: ${hp("7%")};
background: #E2FEEF;
border-radius: 10px;
alignSelf: center;
margin-top: ${hp("10%")};
 `
export const AppBtnText = styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #000000;
alignSelf: center;
margin-top: ${hp("1.5%")};
`





