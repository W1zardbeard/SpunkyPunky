import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


import Colors from '../constants/colors'
import Typography from '../constants/typography'
import Card from './ui/Card'

export default function IngredientsCard({title, data}) {


    const hops = data.hops.map(hop => ({
        name: hop.name
    }))

    const malts = data.malt.map(malt => ({
        name: malt.name
    }))

  


    return (
        <Card style={styles.infoCard}>
          
          <View style={styles.dataListContainer}>
            <View style={styles.dataContainer}>
                <Text style={Typography.h2}>Hops</Text>
                <View>
                {hops.map((item, index) => {
                        return (
                        <Text key={index} style={Typography.p3}>• {item.name}</Text>
                        )

                })}
                </View>
            </View>

            <View style={styles.dataContainer}>
                <Text style={Typography.h2}>Malts</Text>
                <View>
                {malts.map((item, index) => {
                        return (
                        <Text key={index} style={Typography.p3}>• {item.name}</Text>
                        )

                })}
                </View>
            </View>
          </View>
        </Card>
      )
    }
    
    const styles = StyleSheet.create({
      infoCard:{
        gap:8
      },
      dataListContainer:{
        gap:4,
        flexDirection: "row",
      },
      dataContainer:{
          flex:1,
          width: "50%",
          gap:8
      }
    })