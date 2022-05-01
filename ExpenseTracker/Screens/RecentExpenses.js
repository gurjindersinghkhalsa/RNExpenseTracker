import React from 'react';
import {Text} from 'react-native';
import ExpensesOutput from '../Components/ExpensesOutput/ExpensesOutput';

function RecentExpense() {
  return <ExpensesOutput expensesPeriod={'Last 7 Days'} />;
}

export default RecentExpense;
