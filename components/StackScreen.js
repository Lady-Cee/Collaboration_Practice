import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import NumberScreen from '../screens/NumberScreen';
import Options from '../screens/Options/Options';
import Counter from '../screens/Counter';

const StackScreen = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator 
    screenOptions={{headerShown:false}}>
      <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
      <Stack.Screen name="LoginScreen" component={LoginScreen}/>
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      {/* <Stack.Screen name="Home Screen" component={HomeScreen}/> */}
      <Stack.Screen name="Options" component={Options}/>
      <Stack.Screen name="Counter" component={Counter}/>
      <Stack.Screen name="NumberScreen" component={NumberScreen}/>
    </Stack.Navigator>
  )
}

export default StackScreen

const styles = StyleSheet.create({})