import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

const Rail = () => {
  return (
    <View style={styles.root}/>
  );
};

export default memo(Rail);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.divider,
  },
});