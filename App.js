import React,{useEffect} from "react";
import { ThemeProvider } from "react-native-rapi-ui";
import AppNavigator from "./src/navigation/AppNavigator";
import { LogBox } from "react-native";
import { AuthProvider } from "./src/provider/AuthProvider";



export default function App() {
  const images = [
    require("./assets/icon.png"),
    require("./assets/splash.png"),
    require("./assets/login.png"),
    require("./assets/register.png"),
    require("./assets/forget.png"),
  ];
// Ignore firebase v9 AsyncStorage warning
useEffect(() => {
  LogBox.ignoreLogs([
    "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
  ]);
}, []);
  
  return (
    <ThemeProvider images={images}>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </ThemeProvider>
  );
}
