import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//screens
import {Home} from '../screens/home';

const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'home'} component={Home} />
    </Stack.Navigator>
  );
};

export default MainStack;
