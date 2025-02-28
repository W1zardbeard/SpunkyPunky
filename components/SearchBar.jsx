import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import {useState} from 'react';
import SvgUri from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

import SearchIcon from '../assets/icons/search.svg';

import Colors from '../constants/colors'


export default function SearchBar({style}) {

  const navigation = useNavigation();
  const [search, setSearch] = useState("");

  function handleSearchInput(input){
    setSearch(input);
  }

  function handleSearch(){
    const searchApi = search.replace(/ /g, "_");
    console.log(searchApi);
    navigation.navigate("Search", {
      searchQuery: searchApi,
      search: search
  })
  }

  return (
    <View style={[styles.searchBar, style]}>
      <SearchIcon style={styles.searchIcon} />
      <TextInput
        style={{flex:1}}
        placeholder="Search beers"
        placeholderTextColor={Colors.grey}
        onSubmitEditing={handleSearch}
        onChangeText={handleSearchInput}
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