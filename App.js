import * as React from 'react';
import {PanResponder,StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Screen/Login';
import Announcement from './src/Screen/Announcement';
import Menu from './src/Screen/Menu';
import Assignments from './src/Screen/Assignments';
import Resources from './src/Screen/Resources';
import Project from './src/Screen/Project';
import Courses from './src/Screen/Courses';
import Api from './src/Screen/Api';

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Courses" component={Courses} />
        <Stack.Screen name="Menu" component={Menu} /> 
        <Stack.Screen name="Announcement" component={Announcement} />
        <Stack.Screen name="Assignments" component={Assignments} />
        <Stack.Screen name="Resources" component={Resources} />
        <Stack.Screen name="Project" component={Project} />
        <Stack.Screen name="Api" component={Api} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
  
