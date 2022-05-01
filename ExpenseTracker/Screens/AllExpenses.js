import React from 'react';
import {Text} from 'react-native';
import ExpensesOutput from '../Components/ExpensesOutput/ExpensesOutput';

function AllExpenses() {
  return <ExpensesOutput expensesPeriod={'Total'} />;
}

export default AllExpenses;
