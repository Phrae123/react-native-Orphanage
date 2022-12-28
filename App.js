import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/Splash'
import Home from './screens/Home';
import Detail from './screens/Details';
import Login from './screens/Login';
import Contact from './screens/Contact';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen
          name='Splash'
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ headerShown: false}}
        />
        <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Welcome' }}
      />
        
        <Stack.Screen name="Detail" component={Detail} /> 

        <Stack.Screen
        name="Contact"
        component={Contact}
        options={{ headerShown: false }}
      />
        
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App