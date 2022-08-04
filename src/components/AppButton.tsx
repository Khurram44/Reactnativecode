import React, { FC, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP, widthPercentageToDP as wp } from "react-native-responsive-screen";
import AppText from "../components/AppText";
import { COLORS } from "../constants";
import { AppBtn, AppBtnText } from "../Styles/OnboardingStyle";
interface Props {
    btnStyle: any,
    textStyle: any,
    height: number,
    width: number,
    text: string,
    onPress: any,
    background: string,
    color: string
    border: string
    radius: number
    borderWidth: number
}

const AppButton: FC<Props> = (data) => {
    // const navigation = useNavigation<Authtype>();
    return (
        <TouchableOpacity onPress={data.onPress} style={[{ height: hp(`${data.height}`), width: wp(`${data.width}`), backgroundColor: data.background, borderColor: data.border, borderWidth: data.borderWidth, borderRadius: data.radius }, { ...data.btnStyle }]}>
            <AppBtnText style={data.textStyle}>
                {data.text}
            </AppBtnText>
        </TouchableOpacity >
    )
}
export default AppButton;