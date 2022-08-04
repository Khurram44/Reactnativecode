import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoardingScreen1 from "../screens/OnBoardingScreen1";
import OnBoardingScreen2 from "../screens/OnBoardingScreen2";
import Onboardingscreen3 from "../screens/OnBoardingScreen3";

export type AuthStackParamList = {}
const { Navigator, Screen } = createStackNavigator<AuthStackParamList>();


const AppNavigation: FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >

      <Screen name="OnBoardingScreen1" component={OnBoardingScreen1} />
      <Screen name="OnBoardingScreen2" component={OnBoardingScreen2} />
      <Screen name="OnBoardingScreen3" component={Onboardingscreen3} />

    </Navigator>
  );
};

export default AppNavigation;
