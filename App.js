import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomePage from './app/screens/welcome.js';
import SignUpPage from './app/screens/signup.js';
import ProfilePage from './app/screens/profile.js';

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
      <Stack.Navigator initialRouteName = "Water Question 1">
        <Stack.Screen name = "Welcome" component = {WelcomePage} />
        <Stack.Screen name = "Water Question 1" component = {WaterQ1} />
        <Stack.Screen name = "Water Question 2" component = {WaterQ2} />
        <Stack.Screen name = "Water Question 3" component = {WaterQ3} />
        <Stack.Screen name = "Water Question 4" component = {WaterQ4} />
        <Stack.Screen name = "Waste Question 1" component = {WasteQ1} />
        <Stack.Screen name = "Waste Question 2" component = {WasteQ2} />
        <Stack.Screen name = "Waste Question 3" component = {WasteQ3} />
        <Stack.Screen name = "Waste Question 4" component = {WasteQ4} />
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
