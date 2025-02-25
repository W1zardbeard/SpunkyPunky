import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Colors from '../constants/colors';
import GlobalLayout from '../constants/globalLayout';
import Typography from '../constants/typography';

//component imports
import Hero from '../components/Hero';
import BeerListItem from '../components/BeerListItem';

export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.wrapper}>
        <Hero />
        <View style={GlobalLayout.container}>

          <View style={GlobalLayout.section}>
            <Text style={Typography.h1}>Random beers</Text>
            <BeerListItem />
          </View>
          
        </View>
        
  
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper:{
    backgroundColor: Colors.white,
    flex:1,
    
  }
})


// <Text onPress={() => navigation.navigate('Favorites')}>Favorites</Text>
//         <Text onPress={() => navigation.navigate('Search')}>Search</Text>