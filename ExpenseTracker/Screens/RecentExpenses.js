import React, {useContext, useEffect, useState} from 'react';
import ExpensesOutput from '../Components/ExpensesOutput/ExpensesOutput';
import {ExpenseContext} from '../store/expenses-context';
import {getDateMinusDays} from '../util/Date';
import {fetchExpenses} from '../util/https';
import LoadingOverlay from '../Components/UI/LoadingOverLay';

function RecentExpense() {
  const [isLoading, setisLoading] = useState(true);

  const expenseCntx = useContext(ExpenseContext);
  // const [fetchedExpenses, setFetchedExpense] = useState([]);

  useEffect(() => {
    async function getExpenses() {
      setisLoading(true);
      try {
        const expenses = await fetchExpenses();
        setisLoading(false);
        expenseCntx.setExpenses(expenses);
      } catch (error) {
        alert('Please try again');
      }
      // setFetchedExpense(expense);
    }
    getExpenses();
  },[]);
  const recentExpenses = expenseCntx.expenses.filter(function (expense) {
    // const recentExpenses = fetchedExpenses.filter(function (expense) {
    const today = new Date();
    const date7daysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7daysAgo && expense.date <= today;
  });
  if (isLoading) {
    return <LoadingOverlay />;
  }
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod={'Last 7 Days'}
      fallBackText={'No Recent Expenses Found'}
    />
  );
}

export default RecentExpense;
