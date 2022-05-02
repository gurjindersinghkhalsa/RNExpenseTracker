import React, {useContext} from 'react';
import {Text} from 'react-native';
import ExpensesOutput from '../Components/ExpensesOutput/ExpensesOutput';
import {ExpenseContext} from '../store/expenses-context';

function AllExpenses() {
  const expenseCntx = useContext(ExpenseContext);
  return (
    <ExpensesOutput
      expenses={expenseCntx.expenses}
      expensesPeriod={'Total'}
      fallBackText={'No expenses Found'}
    />
  );
}

export default AllExpenses;
