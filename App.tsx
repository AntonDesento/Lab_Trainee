/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import FirstScreen from './src/Screens/FirstScreen';
import HomeScreen from './src/Screens/HomeScreen';
import StateModal from './src/Screens/StateModal';

export type StackParamList = {
  Home: undefined;
  FirstScreen: undefined;
  StateModal: {listOfState: string[]} | undefined;
};
const Stack = createStackNavigator<StackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="FirstScreen" component={FirstScreen} />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name="StateModal" component={StateModal} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
