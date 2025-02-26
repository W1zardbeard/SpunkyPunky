import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

import Colors from '../../constants/colors'
import Typography from '../../constants/typography'

export default function Button({children, onPress}) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable 
        onPress={onPress} 
        style={styles.button} 
        android_ripple={{color: "#2EDE8A"}}
        > 
        <Text style={[Typography.h3, styles.buttonText]}>{children}</Text>
        </Pressable>  
    </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor: Colors.primaryGreen,
        borderRadius: 100,
        overflow: "hidden",
    },
    button:{
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 100,
        overflow: "hidden",
    },
    buttonText:{
        color: Colors.white,
    }
})