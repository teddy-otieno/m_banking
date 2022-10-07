import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { navigation_container_ref } from './lib/RootNavigation';
import Dashboard from './lib/screens/Dashboard';
import Deposit from './lib/screens/Deposit';
import Login from './lib/screens/Login';
import SignUp from './lib/screens/SignUp';

import { Account } from './lib/mock/transactions';
import Cheques from './lib/screens/Cheques';

const Stack = createNativeStackNavigator();

const App = () => {

  const [account_balance, set_account_balance] = React.useState<number>(2000);

  const value = React.useMemo(() => {
    return { balance: account_balance, set_balance: (s: number) => { set_account_balance(s) } }
  }, [account_balance]);

  return (
    <Account.Provider value={value}>
      <NavigationContainer ref={navigation_container_ref}>
        <Stack.Navigator
          initialRouteName="login"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="sign_up" component={SignUp} />
          <Stack.Screen name="dashboard" component={Dashboard} />
          <Stack.Screen name="deposit" component={Deposit} />
        </Stack.Navigator>
      </NavigationContainer>
    </Account.Provider>
  );
};

export default App;
