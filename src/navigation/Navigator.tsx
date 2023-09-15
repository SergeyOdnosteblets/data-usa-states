import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './stack/MainStack';

export const Navigator = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
