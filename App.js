import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import RootNav from "./navigation/navigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <RootNav />
    </SafeAreaProvider>
  );
}
