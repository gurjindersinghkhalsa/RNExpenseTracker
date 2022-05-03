/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ManageExpenses from './Screens/ManageExpenses';
import AllExpenses from './Screens/AllExpenses';
import RecentExpense from './Screens/RecentExpenses';
import GlobalSytle from './constants/style';
import IconButton from './Components/UI/IconButton';
import ExpenseContextProvider from './store/expenses-context';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function ExpenseOverView() {
  return (
    <BottomTab.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {backgroundColor: GlobalSytle.colors.blue},
        headerTintColor: 'white',
        tabBarStyle: {
          backgroundColor: GlobalSytle.colors.blue,
        },
        tabBarActiveTintColor: 'white',
        headerRight: tintColor => (
          <IconButton
            IconName={'add.png'}
            color={tintColor}
            onPress={() => {
              navigation.navigate('ManageExpense');
            }}
          />
        ),
      })}>
      <BottomTab.Screen
        name="RecentExpense"
        component={RecentExpense}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./Assests/all.png')}
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="AllExpense"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('./Assests/recent.png')}
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
function App() {
  return (
    <ExpenseContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: GlobalSytle.colors.blue},
            headerTintColor: 'white',
          }}>
          <Stack.Screen
            name="ExpenseOverView"
            component={ExpenseOverView}
            options={{headerShown: false}} // to hide header
          />
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpenses}
            options={{
              title: 'Manage Expenes',
              presentation: 'modal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ExpenseContextProvider>
  );
}

export default App;
