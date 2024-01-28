import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator presentation="modal" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Listings" component={ListingsScreen}/>
        <Stack.Screen name="ListingsDetails" component={ListingDetailsScreen}/>
    </Stack.Navigator>
)

export default FeedNavigator;