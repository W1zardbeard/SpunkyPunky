import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native'
import axios from 'axios';
import {useState, useEffect} from 'react';

import Colors from '../constants/colors';
import Typography from '../constants/typography';
import imageMapping from '../utils/imageMapping';

import TitleCard from '../components/TitleCard';
import InfoCard from '../components/FoodPairingsCard';
import FoodPairingsCard from '../components/FoodPairingsCard';
import IngredientsCard from '../components/IngredientsCard';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function BeerDetails({route, navigation}) {

 const passedBeer = route.params.beer; 
 const image = imageMapping[passedBeer.image_url];
 const [isFavorite, setIsFavorite] = useState(false);



  //set favorite status
 function setFavorite(){
    axios.post('http://10.0.2.2:5000/api/setFavorite', {
      id: passedBeer.id,
      isFavorite: !isFavorite,
    });
    setIsFavorite(!isFavorite);
 }


 //get favorite status
  useEffect(() => {
    console.log("beer id", passedBeer.id);
    const fetchFavoriteStatus = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:5000/api/isFavorite', {
          params: {
            id: passedBeer.id,
          },
        });
   
        setIsFavorite(response.data);
      } catch (error) {
        console.error('Error fetching favorite status:', error);
      }
    };
    fetchFavoriteStatus();
  }, []);



  //set navigation options
 navigation.setOptions({
    title: passedBeer.name,
    headerRight : () => (
      <Pressable onPress={setFavorite}>
        {isFavorite ? <MaterialCommunityIcons name={"cards-heart"} color={"red"} size={24} /> :
        <MaterialCommunityIcons name={"cards-heart-outline"} color={"white"} size={24} />}
      </Pressable>
    ),  
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