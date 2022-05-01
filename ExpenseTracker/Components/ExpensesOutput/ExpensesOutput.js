import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import GlobalStyle from '../../constants/style';

const DUMMY_OUTPUT = [
  {
    id: 'e1',
    amount: 90.10,
    description: "Pair of shoes",
    date: new Date('2022-03-03'),
  },
  {
    id: 'e2',
    amount: 120.70,
    description: 'Kurta pjama',
    date: new Date('20221-10-03'),
  },
  {
    id: 'e3',
    amount: 90.0,
    description: 'Whey Protein',
    date: new Date('2021-09-03'),
  },
  {
    id: 'e4',
    amount: 60.0,
    description: 'Garland',
    date: new Date('2021-06-18'),
  },
  {
    id: 'e5',
    amount: 10.0,
    description: 'A pair of Locks',
    date: new Date('2021-12-29'),
  },
  {
    id: 'e6',
    amount: 90.120,
    description: 'Whey Protein',
    date: new Date('2021-09-03'),
  },
  {
    id: 'e7',
    amount: 60.320,
    description: 'School Bag',
    date: new Date('2021-06-18'),
  },
  {
    id: 'e8',
    amount: 10.60,
    description: 'A pair of Locks',
    date: new Date('2021-12-29'),
  },
];
function ExpensesOutput({expenses, expensesPeriod}) {
  // object have data
  return (
    <View style={style.container}>
      <ExpensesSummary expenses={DUMMY_OUTPUT} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_OUTPUT} />
    </View>
  );
}

export default ExpensesOutput;
export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.colors.wheat,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
})