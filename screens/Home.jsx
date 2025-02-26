import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Colors from '../constants/colors';
import GlobalLayout from '../constants/globalLayout';
import Typography from '../constants/typography';

//component imports
import Hero from '../components/Hero';

import BeerList from '../components/BeerList';

export default function Home({ navigation }) {
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
  }, []);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:3333/v2/beers/random');
        const beers = response.data;
        setFavorites(beers);
      } catch (error) {
        console.log(error);
      }
    };

    // fetchFavorites();
  }, []);


  console.log(randomBeers);
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