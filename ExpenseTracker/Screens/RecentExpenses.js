import React, {useContext} from 'react';

import ExpensesOutput from '../Components/ExpensesOutput/ExpensesOutput';
import {ExpenseContext} from '../store/expenses-context';
import {getDateMinusDays} from '../util/Date';

function RecentExpense() {
  const expenseCntx = useContext(ExpenseContext);
  const recentExpenses = expenseCntx.expenses.filter(function (expense) {
    const today = new Date();
    const date7daysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7daysAgo && expense.date <= today;
  });
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod={'Last 7 Days'}
      fallBackText={'No Recent Expenses Found'}
    />
  );
}

export default RecentExpense;
