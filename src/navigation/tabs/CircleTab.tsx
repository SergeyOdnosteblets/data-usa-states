import {View} from 'react-native';
import {ReactNode} from 'react';

interface CircleTabProps {
  children: ReactNode;
  focused: boolean;
}

export const CircleTab = ({children, focused}: CircleTabProps) => {
  return (
    <View style={{position: 'relative'}}>
      {focused ? (
        <View
          style={{
            position: 'absolute',
            top: -20,
            right: -10,
            backgroundColor: 'orange',
            borderRadius: 30,
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {children}
        </View>
      ) : (
        children
      )}
    </View>
  );
};
