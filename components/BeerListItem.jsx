import { StyleSheet, Text, View, Pressable, Image, Platform } from 'react-native'
import React from 'react'

import imageMapping from '../utils/imageMapping';

import Colors from '../constants/colors'
import Abv from './Abv'
import BeerColor from './BeerColor'
import Card from './ui/Card';

import Typography from '../constants/typography'

export default function BeerListItem({beer}) {
    console.log(beer);
    const image = imageMapping[beer.image_url];
  return (
    <Card style={styles.beerListItem}>
      <Pressable 
        android_ripple={{color: Colors.form}}
        style={({pressed}) => [styles.innerContainer, pressed ? styles.pressed : null]}
      >
        <View style={styles.imageContainer}>
            <Image source={image} style={styles.imagePreview} />
        </View>
        <View style={styles.beerInfo}>
            <View>
                <Text style={Typography.h3}>{beer.name}</Text>
                <Text style={Typography.p3}>{beer.tagline}</Text>
            </View>
            <View style={styles.beerMeta}>

                <Abv abv={beer.abv} />
                <BeerColor ebc={beer.ebc} />
            </View>
        </View>
      </Pressable>
    </Card>
  )
}

const styles = StyleSheet.create({
    beerListItem:{
        width: "40%",	
        padding: 0,
        flexGrow:1,
        backgroundColor: "white",
        borderRadius: 8,
        elevation:2
    },
    innerContainer:{
        padding: 16,
        flex:1,
    },
    pressed:{
        opacity: Platform.OS === "android" ? 1 : 0.5,
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
        flex:1,
        gap:4,
        justifyContent: "space-between",
    },
    beerMeta:{
        flexDirection: "row",
        gap: 8,
        marginTop: 8,
        alignItems: "center",
        justifyContent: "space-between"
    }

})