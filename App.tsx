import { useCallback } from "react";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { RecoilRoot } from "recoil";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import Routes from "./routes/Routes";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    // "Poppins-900": require("./assets/fonts/Poppins-Black.ttf"),
    // "Poppins-800": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    // "Poppins-700": require("./assets/fonts/Poppins-Bold.ttf"),
    // "Poppins-600": require("./assets/fonts/Poppins-SemiBold.ttf"),
    // "Poppins-500": require("./assets/fonts/Poppins-Medium.ttf"),
    // "Poppins-400": require("./assets/fonts/Poppins-Regular.ttf"),
    // "Poppins-300": require("./assets/fonts/Poppins-Light.ttf"),
    // "Poppins-200": require("./assets/fonts/Poppins-ExtraLight.ttf"),
    // "Poppins-100": require("./assets/fonts/Poppins-Thin.ttf")
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <RecoilRoot>
        <Routes />
      </RecoilRoot>
    </SafeAreaProvider>
  );
}
