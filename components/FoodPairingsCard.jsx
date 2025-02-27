import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Colors from '../constants/colors'
import Typography from '../constants/typography'
import Card from './ui/Card'



export default function FoodPairingsCard({data, title}) {

  return (
    <Card style={styles.infoCard}>
      <Text style={Typography.h2}>{title}</Text>
      <View style={styles.dataListContainer}>
        {data.map((item, index) => {
          return (
            <Text key={index} style={Typography.p3}>• {item}</Text>
          )
        })}
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  infoCard:{
    gap:8
  },
  dataListContainer:{
    
  }
})