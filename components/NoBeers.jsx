import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import SvgUri from 'react-native-svg';


import Empty from '../assets/icons/empty.svg';



import Colors from '../constants/colors';
import GlobalLayout from '../constants/globalLayout';
import Typography from '../constants/typography';

export default function NoBeers() {



  return (
    <View style={styles.emptyState}>
      <Empty />
      <Text style={Typography.h2}>0 results</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    emptyState:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap:16,
    }
})