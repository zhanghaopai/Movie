import AppNavigation from './navigations/appNavigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { GlobalJS } from './style/global';
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView >
        <HomeScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

