import React, { memo } from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../../constants/colors';

const RailSelected = () => {
  return (
    <View style={styles.root}/>
  );
};

export default memo(RailSelected);

const styles = StyleSheet.create({
  root: {
    height: 8,
    backgroundColor: Colors.primaryGreen,
    borderRadius: 4,
  },
});