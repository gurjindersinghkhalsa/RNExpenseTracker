import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import GlobalStyle from '../../constants/style';

function Input({label, isValid, style, textInputConfig}) {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }
  if (!isValid) {
    inputStyles.push(styles.invalidInput)
  }
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, !isValid && styles.invalid]}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  invalidInput: {
    backgroundColor: 'red',
  },
  invalid: {
    color: 'red',
  },
  inputContainer: {
    marginHorizontal: 14,
    marginVertical: 10,
  },
  label: {
    fontSize: 12,
    // padding: 3,
  },
  input: {
    padding: 10,
    borderRadius: 10,
    fontSize: 15,
    backgroundColor: GlobalStyle.colors.goldenRod,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
});
