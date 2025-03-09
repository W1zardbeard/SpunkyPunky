import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../../../constants/colors';

const THUMB_RADIUS_LOW = 16;
const THUMB_RADIUS_HIGH = 24;

const Thumb = ({name}) => {
  return <View style={name === 'high' ? styles.rootHigh : styles.rootLow} />;
};

const styles = StyleSheet.create({
  rootLow: {
    width: THUMB_RADIUS_LOW * 2,
    height: THUMB_RADIUS_LOW * 2,
    borderRadius: THUMB_RADIUS_LOW,
   
    borderColor: Colors.ripple,
    backgroundColor: Colors.primaryGreen,
  },
  rootHigh: {
    width: THUMB_RADIUS_HIGH * 2,
    height: THUMB_RADIUS_HIGH * 2,
    borderRadius: THUMB_RADIUS_HIGH,
    borderWidth: 2,
    borderColor: '#7f7f7f',
    backgroundColor: '#ffffff',
  },
});

export default memo(Thumb);