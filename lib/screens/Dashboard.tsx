import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './dash/Home';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Cheques from './Cheques';
import Accounts from './dash/Accounts';

const Tab = createBottomTabNavigator();

export default function() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ _focused, color, size }) => {
          let iconsName;
          switch (route.name) {
            case 'home': {
              iconsName = 'home';
              break;
            }

            case 'cards': {
              iconsName = 'credit-card';
              break;
            }

            case 'activity': {
              iconsName = 'subject';
              break;
            }

            case 'accounts': {
              iconsName = 'account-circle';
              break;
            }

            default: {
              iconsName = 'home';
            }
          }

          return <MaterialIcons name={iconsName} size={size} color={color} />;
        },
        headerShown: false,
      })}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="cards" component={Cheques} />
      <Tab.Screen name="activity" component={Home} />
      <Tab.Screen name="accounts" component={Accounts} />
    </Tab.Navigator>
  );
}
