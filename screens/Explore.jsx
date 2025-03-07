import { StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {useEffect, useState} from 'react'
import axios from 'axios';
import BeerList from '../components/BeerList';
import Colors from '../constants/colors';

export default function Explore({navigation}) {

  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);

  
  //set navigation options
 navigation.setOptions({
  title: "Explore",
  headerShadowVisible: true,
  headerTitleAlign: "center",
  headerTintColor: Colors.white,
  headerStyle: {
    backgroundColor: Colors.primaryGreen,
  },
});

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get("http://10.0.2.2:3333/v2/beers?per_page=30&page=1");
        console.log(response.data);
        setBeers(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchBeers();
  },[]);


  const fetchMoreBeers = async () => {
    try {
      const response = await axios.get("http://10.0.2.2:3333/v2/beers?per_page=30&page=" + (page + 1));
      setPage(page + 1);
      console.log(response.data);
      setBeers([...beers, ...response.data]);
    }
    catch (error) {
      console.log(error);
    }
  }


  return (
    <ScrollView style={styles.beerList}>
      <BeerList
        beers={beers}
      
        type="random"
      />
      <Button title="Load More" onPress={fetchMoreBeers} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  beerList: {
    paddingBottom:40,

  }
})