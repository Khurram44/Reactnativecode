import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./src/navigation/Basicappnavigation";
import { COLORS } from "./src/constants";

// import { rootstore, StoreProvider } from "./src/Store";
export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </>
  );
}

