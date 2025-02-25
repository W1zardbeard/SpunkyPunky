import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Colors from '../constants/colors'
import Typography from '../constants/typography'

export default function Abv({abv}) {
  return (
    <View style={styles.abv}>
      <Text style={[Typography.p3, styles.abvText]}>Abv: {abv}%</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    abv:{
        backgroundColor: Colors.grey, 
        alignSelf: "flex-start",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 100,
    },
    abvText:{
        color: Colors.white,
        fontWeight: "bold"
    }
})

