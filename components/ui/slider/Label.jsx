import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';
import Typography from '../../../constants/typography';

const Label = ({ text, ...restProps }) => {
  return (
    <View style={styles.root} {...restProps}>
      <Text style={[styles.text, Typography.p2, {color: "white"}]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: Colors.primaryGreen,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
});

export default memo(Label);