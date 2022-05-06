import React, {useContext, useEffect, useState} from 'react';
import ExpensesOutput from '../Components/ExpensesOutput/ExpensesOutput';
import {ExpenseContext} from '../store/expenses-context';
import {getDateMinusDays} from '../util/Date';
import {fetchExpenses} from '../util/https';

function RecentExpense() {
  const expenseCntx = useContext(ExpenseContext);
  // const [fetchedExpenses, setFetchedExpense] = useState([]);

  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpenses();
      expenseCntx.setExpenses(expenses);
      // setFetchedExpense(expense);
    }
    getExpenses();
  }, []);
  const recentExpenses = expenseCntx.expenses.filter(function (expense) {
  // const recentExpenses = fetchedExpenses.filter(function (expense) {
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
