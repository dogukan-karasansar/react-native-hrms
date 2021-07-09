import React from 'react';
import 'react-native-gesture-handler';

//navigators
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/stack/mainStack';

const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
export default App;
