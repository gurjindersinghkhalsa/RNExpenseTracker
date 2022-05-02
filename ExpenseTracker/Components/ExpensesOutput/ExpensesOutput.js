import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import GlobalStyle from '../../constants/style';

function ExpensesOutput({expenses, expensesPeriod, fallBackText}) {
  // object have data
  let content = <Text style={style.fallBackText}>{fallBackText}</Text>;
  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }
  return (
    <View style={style.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
}

export default ExpensesOutput;
export const style = StyleSheet.create({
  fallBackText: {
    fontSize: 19,
    textAlign: 'center',
    marginTop: 30,
  },
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.colors.wheat,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
