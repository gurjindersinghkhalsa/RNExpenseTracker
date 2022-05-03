import React, {useLayoutEffect, useContext} from 'react';
import {Text, View, Pressable, StyleSheet} from 'react-native';
// import {IconButton} from 'react-native-paper';
import GlobalColor from '../constants/style';
import Button from '../Components/UI/Button';
import {ExpenseContext} from '../store/expenses-context';
import ExpenseForm from '../Components/ManageExpense/ExpenseForm';

function ManageExpenses({route, navigation}) {
  const expenseCntx = useContext(ExpenseContext);

  const editedExpenseId = route.params?.id;
  const isEditing = !!editedExpenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  function deleteExpenseHander() {
    expenseCntx.deleteExpense({id: editedExpenseId});
    navigation.goBack();
  }
  function updateExpenseHandler() {
    if (isEditing) {
      console.log('do update');
      expenseCntx.updateExpense(editedExpenseId, {
        description: 'Updated!!!',
        amount: 10.0,
        date: new Date('2022-05-02'),
      });
    } else {
      expenseCntx.addExpense({
        description: 'Test!!!',
        amount: 10.0,
        date: new Date('2022-05-02'),
      });
    }
    navigation.goBack();
  }
  function cancelExpenseHandler() {
    navigation.goBack();
  }
  return (
    <View style={styles.root}>
      <ExpenseForm/>
      <View style={styles.buttonContiner}>
        <Button
          style={styles.button}
          mode={'flat'}
          onPress={cancelExpenseHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={updateExpenseHandler}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
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
  buttonContiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 140,
    marginHorizontal: 15,
  },
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
