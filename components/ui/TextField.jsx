import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import {useState} from 'react';


import Colors from '../../constants/colors'


export default function TextField({style}) {


  const [input, setInput] = useState("");

  function handleInput(input){
    setInput(input);
  }

  

  return (
    <View style={[styles.searchBar, style]}>

      <TextInput
        style={{flex:1}}
        placeholder="Search beers"
        placeholderTextColor={Colors.grey}
        onChangeText={handleInput}
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

      
    },
    searchIcon:{
        width:24,
        height:24,
    },

})