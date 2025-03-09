import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {useEffect, useState} from 'react'
import axios from 'axios';
import BeerList from '../components/BeerList';
import { useIsFocused } from "@react-navigation/native";

import Colors from '../constants/colors';

export default function Search({ navigation, route }) {

  const isFocused = useIsFocused();
  const [searchedBeers, setSearchedBeers] = useState([]);
  const [resultSize, setResultSize] = useState(0);
  const searchQuery = route.params?.searchQuery;
  const search = route.params?.search;

   //set navigation options
 navigation.setOptions({
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: Colors.primaryGreen,
  },
});



  useEffect(() => {
    if(searchQuery !== "") {
    const fetchSearchedBeers = async () => {
      try {
        const requests = await axios.get('http://10.0.2.2:3333/v2/beers?beer_name=' + searchQuery);
        console.log(requests.data);
        setSearchedBeers(requests.data);
        setResultSize(requests.data.length);
       
      } catch (error) {
        console.log(error);
      }
    };


  
    fetchSearchedBeers();
    }else {
      setSearchedBeers([]);
      setResultSize(0);
    }
  }, [searchQuery, isFocused]);


  return (

      <ScrollView style={styles.wrapper}>
        <BeerList 
              beers={searchedBeers} 
              title={"Search for '" + search + "'"}
              type={"random"}
              resultSize={resultSize}
        />
      </ScrollView>
 
  )
}

const styles = StyleSheet.create({
  wrapper:{
    paddingHorizontal: 16,
  }
})