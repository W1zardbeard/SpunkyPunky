import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../../constants/colors'
import Typography from '../../constants/typography'

export default function FAB({children, onPress}) {
  return (
    <View style={[styles.FAB]}>
    <Pressable 
      onPress={onPress} 
        style={styles.button}
      android_ripple={{color: "#2EDE8A"}}
      > 
      <MaterialCommunityIcons name={"filter"} color={"white"} size={24} />
      </Pressable>  
  </View>
  )
}

const styles = StyleSheet.create({
    FAB:{
        backgroundColor: Colors.primaryGreen,
        borderRadius: 100,
        overflow: "hidden",
        position: "absolute",
        bottom: 30,
        right: 20,
       
        elevation: 10,
    },
    button:{
       padding: 16,
        borderRadius: 100,
        overflow: "hidden",
        textAlign: "center",
    },
})