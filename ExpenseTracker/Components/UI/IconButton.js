import React from 'react';
import {Pressable, StyleSheet, Image} from 'react-native';

function IconButton({IconName, color, onPress}) {
  function showAddUI() {
    onPress();
  }
  return (
    <Pressable
      onPress={showAddUI}
      style={({pressed}) => (pressed ? style.opacity : null)}>
      <Image source={require('../../Assests/add.png')} style={style.imageS} />
    </Pressable>
  );
}

export default IconButton;
const style = StyleSheet.create({
  imageS: {
    padding: 10,
    marginHorizontal: 10,
    width: 25,
    height: 25,
  },
  opacity: {
    opacity: 0.75,
  },
});
