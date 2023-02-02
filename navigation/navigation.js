import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import MainScreen from "../screens/MainScreen";
import SliderExtend from "../screens/SliderExtended";
const Stack = createStackNavigator();

export default function navigation() {
  return (
    <NavigationContainer initialRouteName="MainPage">
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="MainPage"
          component={MainScreen}
        />
        <Stack.Screen
          options={{
            title: "SELECT BRAND",
            headerStyle: {
              backgroundColor: "#DF3111",
            },
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "500",
              fontSize: 18,
            },
          }}
          name="SliderExtend"
          component={SliderExtend}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
