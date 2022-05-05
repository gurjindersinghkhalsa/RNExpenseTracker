import React, {useState} from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import GlobalColor from '../../constants/style';
import Input from './Input';
import Button from '../UI/Button';
import style from '../../constants/style';

function ExpenseForm({submitButtonLabel, onCancel, onSubmit, defaultValues}) {
  const [input, setInput] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : '',
      isValid: true,
    },
    date: {
      value: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : '',
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : '',
      isValid: true,
    },
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    //setInputValues(()=>{}) // func form to update state on previous state
    setInput(currentInput => {
      //currentInputValues obj we will retrun update currentInputValues obj
      return {
        ...currentInput, // spread all input values
        [inputIdentifier]: {value: enteredValue, isValid: true}, // override one value we want to change dynamically
      };
    });
  }
  function submitHandler() {
    const expenseData = {
      amount: +input.amount.value, // + for convert string to number
      date: new Date(input.date.value),
      description: input.description.value,
    };
    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descIsValid = expenseData.description.trim().length > 0;
    if (!amountIsValid || !dateIsValid || !descIsValid) {
      // Alert.alert('Invalid Inputs', 'Please check your input values');
      setInput(currentInput => {
        return {
          amount: {value: currentInput.amount.value, isValid: amountIsValid},
          date: {value: currentInput.date.value, isValid: dateIsValid},
          description: {
            value: currentInput.description.value,
            isValid: descIsValid,
          },
        };
      });
      return;
    }
    onSubmit(expenseData);
  }
  const formIsInvalid =
    !input.amount.isValid || !input.date.isValid || !input.description.isValid;
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.container}>
        <Input
          style={styles.rowInput}
          label={'Amount'}
          isValid={input.amount.isValid}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangeHandler.bind(this, 'amount'),
            value: input.amount.value,
          }}
        />

        <Input
          style={styles.rowInput}
          label={'Date'}
          isValid={input.date.isValid}
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, 'date'),
            value: input.date.value,
          }}
        />
      </View>

      <Input
        label={'Description'}
        isValid={input.description.isValid}
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, 'description'),
          value: input.description.value,
          //   autoCapitalize: 'none'
          //   autocorrect: false,
        }}
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>
          InValid Input Please check your Input values
        </Text>
      )}
      <View style={styles.buttonContiner}>
        <Button style={styles.button} mode={'flat'} onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

export default ExpenseForm;
const styles = StyleSheet.create({
  errorText: {
    fontSize: 15,
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
  },
  buttonContiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 140,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: GlobalColor.colors.blue,
    marginVertical: 2,
    textAlign: 'center',
  },
  form: {
    marginTop: 10,
  },
  container: {
    flexDirection: 'row',
  },
  rowInput: {
    flex: 1,
  },
});
