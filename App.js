import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator
          screenOptions={{ contentStyle: { backgroundColor: "rgb(243, 244, 246)" } }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          {/* <><Text>ABC</Text></> */}
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
