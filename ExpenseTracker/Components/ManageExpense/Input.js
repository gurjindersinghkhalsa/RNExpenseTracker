import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import GlobalStyle from '../../constants/style';

function Input({label, style, textInputConfig}) {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
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
