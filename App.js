import React, {  } from "react";
import { Button, Text } from "react-native";
import Screen from "./app/components/Screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import { GestureHandlerRootView } from 'react-native-gesture-handler';



const Tweets = ({navigation}) => (
  <Screen>
    <Text> Tweets </Text>
    < Button
      title="View Tweet"
      onPress={() => navigation.navigate("StackNavigator", { screen: "TweetDetails", params: { id: 1 } })}
      
    />
  </Screen>
);
const TweetDetails = ({route}) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);
const Stack = createNativeStackNavigator();




export default function App() {
  return (
 
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator/>
      </NavigationContainer>
      
  )
}
