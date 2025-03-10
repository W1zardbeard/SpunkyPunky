import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

import Colors from '../../constants/colors'
import Typography from '../../constants/typography'

export default function Button({children, onPress, style}) {
  return (
    <View style={[styles.buttonContainer, style]}>
      <Pressable 
        onPress={onPress} 
        style={styles.button} 
        android_ripple={{color: Colors.ripple}}
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
        textAlign: "center",
    },
    buttonText:{
        color: Colors.white,
        textAlign: "center",
    }
})