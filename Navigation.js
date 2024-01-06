// Navigation.js
// hello
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import AppScreen from './screens/AppScreen';
import Temperature from './screens/Temperature';
import Volume from './screens/Volume';
import Weight from './screens/Weight';
import Energy from './screens/Energy';
import Length from './screens/Length';
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="          Lunika's Conversion App" component={WelcomeScreen} />
        <Stack.Screen name="Distance" component={AppScreen} />
		 <Stack.Screen name="Temperature" component={Temperature} />
		 <Stack.Screen name="Volume" component={Volume} />
		  <Stack.Screen name="Weight" component={Weight} />
		   <Stack.Screen name="Energy" component={Energy} />
		   <Stack.Screen name="Length" component={Length} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
