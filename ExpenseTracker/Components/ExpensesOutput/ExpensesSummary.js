import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import GlobalStyle from '../../constants/style';

// function ExpensesSummary({expenses, periodName}) {
function ExpensesSummary({expenses, periodName}) {
  const expenseSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={style.container}>
      <Text style={style.periodName}>{periodName}</Text>
      <Text style={style.sum}>${expenseSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;
const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: GlobalStyle.colors.pink,
  },
  periodName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: GlobalStyle.colors.red,
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyle.colors.white,
  },
});
