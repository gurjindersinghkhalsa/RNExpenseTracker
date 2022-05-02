import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import GlobalStyle from '../../constants/style';

function Button({children, onPress, mode, style}) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => pressed && styles.opacity}>
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={styles.text}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  opacity: {
    opacity: 0.75,
  },
  flat: {
    backgroundColor: GlobalStyle.colors.gray,
  },
  button: {
    backgroundColor: GlobalStyle.colors.blue,
    margin: 5,
    borderRadius: 10,
  },
  text: {
    color: GlobalStyle.colors.white,
    textAlign: 'center',
    fontSize: 20,
    padding: 7,
  },
});
