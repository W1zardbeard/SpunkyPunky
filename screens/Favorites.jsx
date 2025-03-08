import {  StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useRef, useState, useEffect } from 'react';
import { useIsFocused } from "@react-navigation/native";

import axios from 'axios';
import BeerList from '../components/BeerList';
import Colors from '../constants/colors';

export default function Favorites({navigation}) {
  
    const isFocused = useIsFocused();

  const [favorites, setFavorites] = useState([]);

    // Set navigation options
    navigation.setOptions({
      title: "Favorites",
      headerShadowVisible: true,
      headerTitleAlign: "center",
      headerTintColor: Colors.white,
      headerStyle: {
        backgroundColor: Colors.primaryGreen,
      },
    });


    useEffect(() => {
      const fetchFavorites = async () => {
        try {
          const response = await axios.get('http://10.0.2.2:5000/api/getFavorites');
         
          const beers = response.data;
        
          // grab each beer id from the response and make a request to the API to get the beer details
          const beerDetailsRequests = beers.map(beer => axios.get(`http://10.0.2.2:3333/v2/beers/${beer.beer_id}`));
          const beerDetailsResponses = await Promise.all(beerDetailsRequests);
          const beerDetails = beerDetailsResponses.map(response => response.data);
  
          setFavorites(beerDetails.flat());
          
  
     
          
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchFavorites();
    }, [isFocused]);


  return (
    <View>
       <BeerList 
          beers={favorites} 
          
            type={"favorites"}
        />
    </View>
  )
}

const styles = StyleSheet.create({})