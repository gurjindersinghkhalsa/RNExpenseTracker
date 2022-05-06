import React, {useLayoutEffect, useContext} from 'react';
import {Text, View, Pressable, StyleSheet} from 'react-native';
// import {IconButton} from 'react-native-paper';
import GlobalColor from '../constants/style';
import Button from '../Components/UI/Button';
import {ExpenseContext} from '../store/expenses-context';
import ExpenseForm from '../Components/ManageExpense/ExpenseForm';
import { storeExpense } from '../util/https';

function ManageExpenses({route, navigation}) {
  const expenseCntx = useContext(ExpenseContext);

  const editedExpenseId = route.params?.id;
  const isEditing = !!editedExpenseId;
  const selectedExpense = expenseCntx.expenses.find(
    expense => expense.id === editedExpenseId,
  );
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  function deleteExpenseHander() {
    expenseCntx.deleteExpense({id: editedExpenseId});
    navigation.goBack();
  }
  function confirmHandler(expenseData) {
    if (isEditing) {
      console.log('do update');
      expenseCntx.updateExpense(editedExpenseId, expenseData);
    } else {
      storeExpense.storeExpense(expenseData);
      expenseCntx.addExpense(expenseData);
    }
    navigation.goBack();
  }
  function cancelExpenseHandler() {
    navigation.goBack();
  }
  return (
    <View style={styles.root}>
      <ExpenseForm
        submitButtonLabel={isEditing ? 'Update' : 'Add'}
        onCancel={cancelExpenseHandler}
        onSubmit={confirmHandler}
        defaultValues={selectedExpense}
      />
      {isEditing && (
        <Pressable onPress={deleteExpenseHander}>
          <View style={styles.trash}>
            <Text style={{fontSize: 30}}>🗑️</Text>
          </View>
        </Pressable>
      )}
    </View>
  );
}

export default ManageExpenses;
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: GlobalColor.colors.wheat,
    padding: 20,
  },
  trash: {
    padding: 20,
    marginTop: 10,
    borderTopColor: GlobalColor.colors.pink,
    borderTopWidth: 2.5,
    alignItems: 'center',
  },
});
