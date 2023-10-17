import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import { FavoriteItemsScreen, HomeScreen } from '../screen';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="FavoriteItemsScreen" component={FavoriteItemsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
