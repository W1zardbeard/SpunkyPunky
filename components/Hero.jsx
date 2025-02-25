import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Colors from '../constants/colors'
import GlobalLayout from '../constants/globalLayout';


import SearchBar from '../components/SearchBar';

export default function Hero() {
  return (
    <>
    <View style={styles.hero}>
    <SearchBar 
        style={styles.searchBar}
    />
    </View>
   
    </>
  )
}

const styles = StyleSheet.create({
    hero:{
        width: "100%",
        backgroundColor: Colors.primaryGreen,
        height: "25%",
        paddingHorizontal: GlobalLayout.horizontalPadding,
        justifyContent: "flex-end",
        marginBottom: 24,
    },
    searchBar:{
        position: "absolute", 
        bottom: -24, 
        left: GlobalLayout.horizontalPadding, 
        right: GlobalLayout.horizontalPadding
    }
})