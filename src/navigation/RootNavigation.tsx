import React, {useEffect, useState} from 'react';
import Welcome from '../screens/welcome';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountSetup from '../screens/account-setup';
import Home from '../screens/home';
import Transactions from '../screens/transactions';
import AddTransactions from '../screens/add-transactions';
import {storage} from '../storage';
import UserInfo from '../screens/user-Info';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const userInfo = storage.getString('userInfo') as string;
    const auth = userInfo ? JSON.parse(userInfo)?.isAuth : false;
    setIsAuth(auth);
  }, [isAuth]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!isAuth ? (
        <>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen
            name="AccountSetup"
            children={() => <AccountSetup setIsAuth={setIsAuth} />}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Transactions" component={Transactions} />
          <Stack.Screen name="AddTransactions" component={AddTransactions} />
          <Stack.Screen name="UserInfo" component={UserInfo} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigation;
