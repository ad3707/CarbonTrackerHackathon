import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomePage from './app/screens/welcome.js';

import WaterQ1 from './app/screens/waterQuestions/question1.js'
import WaterQ2 from './app/screens/waterQuestions/question2.js'
import WaterQ3 from './app/screens/waterQuestions/question3.js'
import WaterQ4 from './app/screens/waterQuestions/question4.js'

import WasteQ1 from './app/screens/waste/question1W.js'
import WasteQ2 from './app/screens/waste/question2W.js'
import WasteQ3 from './app/screens/waste/question3W.js'
import WasteQ4 from './app/screens/waste/question4W.js'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "WaterQ1">
        <Stack.Screen name = "Welcome" component = {WelcomePage} />
        <Stack.Screen name = "WaterQ1" component = {WaterQ1} />
        <Stack.Screen name = "WaterQ2" component = {WaterQ2} />
        <Stack.Screen name = "WaterQ3" component = {WaterQ3} />
        <Stack.Screen name = "WaterQ4" component = {WaterQ4} />
        <Stack.Screen name = "WasteQ1" component = {WasteQ1} />
        <Stack.Screen name = "WasteQ2" component = {WasteQ2} />
        <Stack.Screen name = "WasteQ3" component = {WasteQ3} />
        <Stack.Screen name = "WasteQ4" component = {WasteQ4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
