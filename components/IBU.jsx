import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Colors from '../constants/colors'
import Typography from '../constants/typography'

export default function Abv({ibu}) {
  return (
    <View style={styles.ibu}>
      <Text style={[Typography.p3, styles.ibuText]}>IBU &#40;Bitterness&#41;: {ibu}%</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    ibu:{
        backgroundColor: Colors.primaryGreen, 
        alignSelf: "flex-start",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 100,
    },
    ibuText:{
        color: Colors.white,
        fontWeight: "bold"
    }
})

