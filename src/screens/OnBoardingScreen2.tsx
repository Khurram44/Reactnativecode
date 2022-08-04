import React, { FC, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { COLORS } from "../constants";
import OnBoarding from "../components/OnBoarding";
import AppButton from "../components/AppButton";
import { MainContainer, Heading, SubHeading, ExtraText, Illustration, Dots } from "../Styles/OnboardingStyle";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
const Onboardingscreen2: FC = () => {
    const navigation = useNavigation<Authtype>();
    return (
        <MainContainer >
            <OnBoarding
                heading="Store it"
                subheading="Safely"
                extraText="Keyless security means only you can access your funds"
                illustration={require("../assets/images/BoardingScreen2.png")}
                dots={require("../assets/images/dots2.png")}
            />
            <View style={{ flexDirection: "row", marginTop: hp("6%"), alignSelf: 'center', }}>
                <AppButton
                    height={7}
                    width={40}
                    text="Skip"
                    onPress={() => console.log("first")}
                    background={COLORS.secondary}
                    border={COLORS.text}
                    borderWidth={2}
                    radius={24}
                    textStyle={{
                        color: COLORS.text,
                    }}
                    btnStyle={{
                        margin: 10
                    }}
                />
                <AppButton
                    height={7}
                    width={40}
                    text="Next"
                    onPress={() => navigation.navigate("OnBoardingScreen3")}
                    background={COLORS.primary}
                    radius={24}
                    textStyle={{
                        color: COLORS.white,
                    }}
                    btnStyle={{
                        margin: 10,
                    }}
                />
            </View>
        </MainContainer>

    )
}
export default Onboardingscreen2;