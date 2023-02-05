import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomePage from './app/screens/welcome.js';
import SignUpPage from './app/screens/signup.js';
import ProfilePage from './app/screens/profile.js';

import WaterQ1 from './app/screens/waterQuestions/question1.js';
import WaterQ2 from './app/screens/waterQuestions/question2.js';
import WaterQ3 from './app/screens/waterQuestions/question3.js';
import WaterQ4 from './app/screens/waterQuestions/question4.js';

import WasteQ1 from './app/screens/waste/question1W.js';
import WasteQ2 from './app/screens/waste/question2W.js';
import WasteQ3 from './app/screens/waste/question3W.js';
import WasteQ4 from './app/screens/waste/question4W.js';

import HomeEnergyQ1 from './app/screens/homeEnergy/question1HE.js';
import HomeEnergyQ2 from './app/screens/homeEnergy/question2HE.js';
import HomeEnergyQ3 from './app/screens/homeEnergy/question3HE.js';
import HomeEnergyQ4 from './app/screens/homeEnergy/question4HE.js';

import TransportationQ1 from './app/screens/transportation/question1T.js';
import TransportationQ2 from './app/screens/transportation/question2T.js';
import TransportationQ3 from './app/screens/transportation/question3T.js';
import TransportationQ4 from './app/screens/transportation/question4T.js';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home Energy Question 1">
        <Stack.Screen name = "Welcome" component = {WelcomePage} options={{headerShown: false}}/>
        <Stack.Screen name = "Water Question 1" component = {WaterQ1} />
        <Stack.Screen name = "Water Question 2" component = {WaterQ2} />
        <Stack.Screen name = "Water Question 3" component = {WaterQ3} />
        <Stack.Screen name = "Water Question 4" component = {WaterQ4} />
        <Stack.Screen name = "Waste Question 1" component = {WasteQ1} />
        <Stack.Screen name = "Waste Question 2" component = {WasteQ2} />
        <Stack.Screen name = "Waste Question 4" component = {WasteQ4} />
        <Stack.Screen name = "Waste Question 3" component = {WasteQ3} />
        <Stack.Screen name = "Home Energy Question 1" component = {HomeEnergyQ1} options={{headerShown: false}}/>
        <Stack.Screen name = "Home Energy Question 2" component = {HomeEnergyQ2} options={{headerShown: false}} />
        <Stack.Screen name = "Home Energy Question 3" component = {HomeEnergyQ3} options={{headerShown: false}} />
        <Stack.Screen name = "Home Energy Question 4" component = {HomeEnergyQ4} options={{headerShown: false}} />
        <Stack.Screen name = "Transportation Question 1" component = {TransportationQ1} />
        <Stack.Screen name = "Transportation Question 2" component = {TransportationQ2} />
        <Stack.Screen name = "Transportation Question 3" component = {TransportationQ3} />
        <Stack.Screen name = "Transportation Question 4" component = {TransportationQ4} />
        <Stack.Screen name = "SignUp" component = {SignUpPage} options={{headerShown: false}} />
        <Stack.Screen name = "Profile" component = {ProfilePage} options={{headerShown: false}}/>
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
