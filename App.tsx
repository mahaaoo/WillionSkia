import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './pages/HomePage';
import HelloWorld from './pages/HelloWord';
import HelloWorld2 from './pages/HelloWord2';
import Logo from './pages/Logo';
import Hue from './pages/Hue';
import { ReactLogo } from './pages/ReactLogo';
import { SkiaLogo } from './pages/SkiaLogo';
import { Gooey } from './pages/Gooey';
import Card from './pages/Card';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Skia Demos" component={HomePage} />
          <Stack.Screen name="Hello World" component={HelloWorld} />
          <Stack.Screen name="Hello World2" component={HelloWorld2} />
          <Stack.Screen name="Logo" component={Logo} />
          <Stack.Screen name="Hue" component={Hue} />
          <Stack.Screen name="ReactLogo" component={ReactLogo} />
          <Stack.Screen name="SkiaLogo" component={SkiaLogo} />
          <Stack.Screen name="Gooey" component={Gooey} />
          <Stack.Screen name="Card" component={Card} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}


export default App;