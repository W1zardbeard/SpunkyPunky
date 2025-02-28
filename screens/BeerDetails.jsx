import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

import Colors from '../constants/colors';
import Typography from '../constants/typography';
import imageMapping from '../utils/imageMapping';

import TitleCard from '../components/TitleCard';
import InfoCard from '../components/FoodPairingsCard';
import FoodPairingsCard from '../components/FoodPairingsCard';
import IngredientsCard from '../components/IngredientsCard';

export default function BeerDetails({route, navigation}) {

 const passedBeer = route.params.beer; 
 const image = imageMapping[passedBeer.image_url];

 navigation.setOptions({
    title: passedBeer.name,
    headerShadowVisible: false,
    headerStyle: {
      backgroundColor: Colors.primaryGreen,
    },
  });


  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.imageContainer}>
        <Image style={styles.imagePreview} source={image} />
      </View>

      <View style={styles.infoWrapper}>
        <View style={styles.infoContainer}>
        <TitleCard passedBeer={passedBeer} />

        <FoodPairingsCard 
          title={"Food pairings"}
          data={passedBeer.food_pairing} 
        />

        <IngredientsCard 
          title={"Hops & Malts"}
          data={passedBeer.ingredients} 
        />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
   
  },
  imageContainer:{
    width: "100%",
    height: 300,
    backgroundColor: Colors.primaryGreen,
    paddingTop:16,
    paddingBottom:80
  },
  imagePreview:{
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    
  },
  infoWrapper:{
    padding: 16,
    position: "relative",
    top: -60, 
    width: "100%"
  },
  infoContainer:{
    gap:8
  }

})