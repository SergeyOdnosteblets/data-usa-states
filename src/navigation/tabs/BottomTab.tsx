import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Screens} from '../screens/Screens';
import {HomeScreen} from '../../screens/HomeScreen';

import {FavoriteScreen} from '../../screens/FavoriteScreen';
import IconHome from '../../assets/icons/bottomTab/IconSvgHome';
import IconFavorite from '../../assets/icons/bottomTab/IconSvgFavorite';
import {CircleTab} from './CircleTab';
import LogsScreen from '../../screens/LogsScreen';
import IconSvgLogs from '../../assets/IconSvgLogs';

const tabData = [
  {name: Screens.HOME, component: HomeScreen, icon: IconHome},
  {name: Screens.FAVORITE, component: FavoriteScreen, icon: IconFavorite},
  {name: Screens.LOGS, component: LogsScreen, icon: IconSvgLogs},
];

export const BottomTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      {tabData.map((screen, idx) => {
        return (
          <Tab.Screen
            name={screen.name}
            component={screen.component}
            key={idx}
            options={{
              tabBarIcon: ({focused}) => (
                <CircleTab focused={focused}>{<screen.icon />}</CircleTab>
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};
