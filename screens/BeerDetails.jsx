import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

import Colors from '../constants/colors';
import Typography from '../constants/typography';
import imageMapping from '../utils/imageMapping';

import Card from '../components/ui/Card';
import Abv from '../components/Abv';
import BeerColor from '../components/BeerColor';

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
        <View>
        <Card>
         
            <Text style={[Typography.h1, styles.titleAndDate.title]}>{passedBeer.name}</Text>
            
            <Text style={Typography.h3}>"{passedBeer.tagline}"</Text>
          <Text style={[Typography.h2, styles.titleAndDate.date]}>{passedBeer.first_brewed}</Text>
          
          <Text style={Typography.p3}>{passedBeer.description}</Text>
          <View style={styles.beerMeta}>
            <Abv abv={passedBeer.abv} />
            <BeerColor ebc={passedBeer.ebc} />
          </View>
         
        </Card>

    
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
    backgroundColor: Colors.white,
    paddingTop:40,
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
    top: -80, 
    width: "100%"
  },
  titleAndDate:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
   
    gap:16,
    title:{
      color: Colors.primaryGreen,
      flexShrink: 2
    },
    date:{
      color: Colors.grey,
      flex:0
    }
  },
  beerMeta:{
    flexDirection: "row",
    gap: 8,
    marginTop: 8,
    alignItems: "center",
    
  }
})