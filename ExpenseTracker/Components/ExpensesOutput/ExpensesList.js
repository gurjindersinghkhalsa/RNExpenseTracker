import React from 'react';
import {FlatList, View, Text} from 'react-native';
import ExpenseItem from './ExpenseItem';

function ExpensesList({expenses}) {
  function renderExpenseitem({item}) {
    return <ExpenseItem {...item} />;
  }
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseitem}
      // renderItem={({item})=> renderExpenseitem(item)}
      keyExtractor={item => item.id}
    />
  );
}

export default ExpensesList;
