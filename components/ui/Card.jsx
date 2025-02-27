import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Colors from '../../constants/colors';
import GlobalLayout from '../../constants/globalLayout';
import Typography from '../../constants/typography';

export default function Card({children, style}) {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: Colors.white,
        borderRadius: 16,
        padding: 16,
        elevation: 0,
    }
})