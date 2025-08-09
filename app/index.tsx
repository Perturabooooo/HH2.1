import "./global.css"
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './(tabs)/homeScreen';
import FactionSelectScreen from './(tabs)/factionSelectScreen';
import LoyaltySelectScreen from './(tabs)/loyaltySelectScreen';

const Stack = createNativeStackNavigator();

export default function index() {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            {<Stack.Screen name="Home" component={HomeScreen}/>}
            {<Stack.Screen name="FactionSelect" component={FactionSelectScreen}/>}
            {<Stack.Screen name="LoyaltySelect" component={LoyaltySelectScreen}/>}
        </Stack.Navigator>
    );
}