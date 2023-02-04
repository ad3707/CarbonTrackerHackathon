import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomePage from './app/screens/welcome.js';

import waterQ1 from './app/screens/waterQuestions/question1.js'
import waterQ2 from './app/screens/waterQuestions/question2.js'
import waterQ3 from './app/screens/waterQuestions/question3.js'
import waterQ4 from './app/screens/waterQuestions/question4.js'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "waterQ1">
        <Stack.Screen name = "Welcome" component = {WelcomePage} />
        <Stack.Screen name = "waterQ1" component = {waterQ1} />
        <Stack.Screen name = "waterQ2" component = {waterQ2} />
        <Stack.Screen name = "waterQ3" component = {waterQ3} />
        <Stack.Screen name = "waterQ4" component = {waterQ4} />
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
