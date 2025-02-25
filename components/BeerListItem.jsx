import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'

import Colors from '../constants/colors'
import Abv from './Abv'
import BeerColor from './BeerColor'

import Typography from '../constants/typography'

export default function BeerListItem() {
  return (
    <View style={styles.beerListItem}>
      <Pressable>
        <View style={styles.imageContainer}>
            <Image source={require('../assets/v2/2.png')} style={styles.imagePreview} />
        </View>
        <View style={styles.beerInfo}>
            <Text style={Typography.h3}>Small Batch: Mandarina Lager</Text>
            <Text style={Typography.p3}>Pithy Pale Pilsner.</Text>
            <View style={styles.beerMeta}>

                <Abv abv="5.5" />
                <BeerColor ebc={10} />
            </View>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    beerListItem:{
        width:"50%",
        padding: 16,
        backgroundColor: "white",
        borderRadius: 8,
        marginBottom: 16,
        elevation:2
    },
    imageContainer:{
        width: "100%",
        height: 200,
        marginBottom: 8,
        borderRadius: 8,
        overflow: "hidden"
    },
    imagePreview:{
        width: "100%",
        height: "100%",
        resizeMode: "contain",
        
    },
    beerInfo:{
        gap:4
    },
    beerMeta:{
        flexDirection: "row",
        gap: 8,
        marginTop: 8,
        alignItems: "center",
        justifyContent: "space-between"
    }

})