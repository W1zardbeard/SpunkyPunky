import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/colors'
import GlobalLayout from '../constants/globalLayout';
import Typography from '../constants/typography';


import SearchBar from '../components/SearchBar';

export default function Hero() {
  return (
    <>
    <View style={styles.hero}>
      <View style={styles.topBar}>
        <View style={styles.name}>        
         
          <Text style={[Typography.header, {color: Colors.white}]}>Hello Tom</Text>
        </View>
        <View style={styles.profile}>
        <MaterialCommunityIcons name={"account"} color={Colors.primaryGreen} size={24} />
        </View>
      </View>
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
        height: 120,
        paddingHorizontal: GlobalLayout.horizontalPadding,
        paddingTop: 24,
        marginBottom: 24,
    },
    searchBar:{
        position: "absolute", 
        bottom: -24, 
        left: GlobalLayout.horizontalPadding, 
        right: GlobalLayout.horizontalPadding
    },
    name:{
       
        flexDirection: "row",
        alignItems: "center",
        gap: 8, 
    },
    topBar:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
    },
    profile:{
        backgroundColor: Colors.white,
        padding: 4,
        borderRadius: 100,
    }
})