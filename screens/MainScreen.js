import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

import SliderBox from "./SliderScreen";
import styles from "../assets/StyleSheet/StyleSheet";

const MainScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.box}>
          <LinearGradient
            colors={["#ceede7", "#50e6c9", "#b0f7f4"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
          >
            <Image
              style={{ height: 250, width: 250, resizeMode: "contain" }}
              source={require("../assets/Logo/main-logo.png")}
            />
            <View style={[styles.contentBox, styles.boxShadow]}>
              <SliderBox />
            </View>
          </LinearGradient>
          <Text style={styles.headerLabel}>My App</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;
