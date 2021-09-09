import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import DetailItem from './screens/DetailItem';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Shopping" component={Home} />
          <Stack.Screen name="DetailItem" component={DetailItem} />
        </Stack.Navigator>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
