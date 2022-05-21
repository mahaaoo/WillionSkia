import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './pages/HomePage';
import HelloWorld from './pages/HelloWord';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Skia Demos" component={HomePage} />
        <Stack.Screen name="Hello World" component={HelloWorld} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;