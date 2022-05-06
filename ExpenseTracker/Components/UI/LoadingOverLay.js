import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

function LoadingOverlay() {
  return (
    <View style={style.root}>
      <ActivityIndicator size={'large'} color="blue" />
    </View>
  );
}

export default LoadingOverlay;
const style = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
