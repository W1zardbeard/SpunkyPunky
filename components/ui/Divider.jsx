import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

export default function Divider() {
  return (
    <View style={styles.divider}></View>
  )
}

const styles = StyleSheet.create({
    divider:{
        height: 1,
        backgroundColor: Colors.divider,
        marginVertical: 4
    }
})