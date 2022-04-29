/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ManageExpenses from './Screens/ManageExpenses';
import AllExpenses from './Screens/AllExpenses';
import RecentExpense from './Screens/RecentExpenses';
const Stack = createNativeStackNavigator();
const BTab = createBottomTabNavigator();

function MainExpenseComponent() {
  return <BTab.Navigator>
      <BTab.Screen name='All Expense' component={AllExpenses}/>
      <BTab.Screen name='Recent Expense' component={RecentExpense}/>
  </BTab.Navigator>
}
function App() {
  return <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='ExpensesOverview' component={MainExpenseComponent}/>
      <Stack.Screen name='ManageExpenses' component={ManageExpenses}/>
    </Stack.Navigator>
  </NavigationContainer>
}

export default App;
