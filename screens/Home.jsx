import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useIsFocused } from "@react-navigation/native";

import Colors from '../constants/colors';
import GlobalLayout from '../constants/globalLayout';
import Typography from '../constants/typography';

//component imports
import Hero from '../components/Hero';
import BeerList from '../components/BeerList';

export default function Home({ navigation }) {


  const isFocused = useIsFocused();
  const [randomBeers, setRandomBeers] = useState([]);
  const [favorites, setFavorites] = useState([]);	

  useEffect(() => {
    const fetchRandomBeers = async () => {
      try {
        const requests = Array(4).fill().map(() => axios.get('http://10.0.2.2:3333/v2/beers/random'));
        const responses = await Promise.all(requests);
        const beers = responses.map(response => response.data);
        setRandomBeers(beers.flat());
      } catch (error) {
        console.log(error);
      }
    };

    fetchRandomBeers();
  }, [isFocused]);

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
    <SafeAreaView style={styles.SAV}>
    <ScrollView style={styles.wrapper}  >

        <Hero />
        <BeerList 
          beers={favorites} 
          title={"Your favorites"}
          type={"favorites"}
        />
        <BeerList 
          beers={randomBeers} 
          title={"Random beers"}
          type={"random"}
        />
        
  
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.form,
    flex: 1,
    overflow: "visible",
  },
  SAV:{
    flex: 1,
    justifyContent: 'flex-start', 
    overflow: "visible",
  }



});