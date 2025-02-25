import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React from 'react';
import SvgUri from 'react-native-svg';

import SearchIcon from '../assets/icons/search.svg';

import Colors from '../constants/colors'


export default function SearchBar({style}) {
  return (
    <View style={[styles.searchBar, style]}>
      <SearchIcon style={styles.searchIcon} />
      <TextInput
        placeholder="Search beers"
        placeholderTextColor={Colors.grey}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    searchBar:{
        width: "100%",
        backgroundColor: Colors.form,
        borderRadius: 100,
        paddingHorizontal: 24,
        paddingVertical: 8,

        flexDirection: "row",
        alignItems: "center",

        elevation: 8,
    },
    searchIcon:{
        width:24,
        height:24,
    },

})