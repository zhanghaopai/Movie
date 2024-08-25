import AppNavigation from './navigations/appNavigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { GlobalJS } from './style/global';
import HomeScreen from "./screens/HomeScreen";
import { Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaProvider>
      <HomeScreen/>
    </SafeAreaProvider>
  );
}

