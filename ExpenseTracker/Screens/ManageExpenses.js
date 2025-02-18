import React, {useLayoutEffect, useContext, useState} from 'react';
import {Text, View, Pressable, StyleSheet} from 'react-native';
// import {IconButton} from 'react-native-paper';
import GlobalColor from '../constants/style';
import {ExpenseContext} from '../store/expenses-context';
import ExpenseForm from '../Components/ManageExpense/ExpenseForm';
import {storeExpense, updateExpense, deleteExpense} from '../util/https';
import LoadingOverlay from '../Components/UI/LoadingOverLay';

function ManageExpenses({route, navigation}) {
  const expenseCntx = useContext(ExpenseContext);
  const [isUpdating, setUpdating] = useState(false);
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

  async function deleteExpenseHander() {
    setUpdating(true);
    try {
      await deleteExpense(editedExpenseId);
      expenseCntx.deleteExpense({id: editedExpenseId});
    } catch (error) {
      alert('Please Try Again');
    }
    setUpdating(false);
    navigation.goBack();
  }
  async function confirmHandler(expenseData) {
    setUpdating(true);
    try {
      if (isEditing) {
        console.log('do update');
        expenseCntx.updateExpense(editedExpenseId, expenseData);
        await updateExpense(editedExpenseId, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        expenseCntx.addExpense({...expenseData, id: id});
      }
    } catch (error) {
      alert('Please try Again');
    }
    navigation.goBack();
  }
  function cancelExpenseHandler() {
    navigation.goBack();
  }
  if (isUpdating) {
    return <LoadingOverlay />;
  }
  return (
    <View style={styles.root}>
      <ExpenseForm
        submitButtonLabel={isEditing ? 'Update' : 'Add'}
        onCancel={cancelExpenseHandler}
        onSubmit={confirmHandler}
        defaultValues={isEditing ? selectedExpense : ''}
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
