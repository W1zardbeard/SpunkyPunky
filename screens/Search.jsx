import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {useEffect, useState} from 'react'
import axios from 'axios';
import BeerList from '../components/BeerList';

export default function Search({ navigation, route }) {

  const [searchedBeers, setSearchedBeers] = useState([]);
  const [resultSize, setResultSize] = useState(0);
  const searchQuery = route.params.searchQuery;
  const search = route.params.search;

  useEffect(() => {
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
  }, [searchQuery]);


  return (
    <SafeAreaView>
      <ScrollView style={styles.wrapper}>
        <BeerList 
              beers={searchedBeers} 
              title={"Search for '" + search + "'"}
              type={"random"}
              resultSize={resultSize}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
 
})