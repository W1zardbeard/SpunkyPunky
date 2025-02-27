import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function BeerColor({ ebc }) {
  const [color, setColor] = useState("");

  useEffect(() => {
    switch (true) {
      case (ebc <= 4):
        setColor("ebc4");
        break;
      case (ebc <= 6):
        setColor("ebc6");
        break;
      case (ebc <= 8):
        setColor("ebc8");
        break;
      case (ebc <= 12):
        setColor("ebc12");
        break;
      case (ebc <= 16):
        setColor("ebc16");
        break;
      case (ebc <= 20):
        setColor("ebc20");
        break;
      case (ebc <= 26):
        setColor("ebc26");
        break;
      case (ebc <= 33):
        setColor("ebc33");
        break;
      case (ebc <= 39):
        setColor("ebc39");
        break;
      case (ebc <= 47):
        setColor("ebc47");
        break;
      case (ebc <= 57):
        setColor("ebc57");
        break;
      case (ebc <= 69):
        setColor("ebc69");
        break;
      case (ebc <= 79):
        setColor("ebc79");
        break;
      case (ebc <= 138):
        setColor("ebc138");
        break;
      case (ebc > 138):
        setColor("ebc138");
        break;
      default:
        console.log("water");
        break;
    }
   
  }, [ebc]);

  return (
    <View style={styles.beerColor}>
        <Text>Color</Text>
        <View style={[styles.colorContainer, styles[color]]}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    beerColor:{
        flexDirection: "row",
        gap: 4,
        alignItems: "center"
    },
    colorContainer:{
        height:20,
        width:20,
        borderRadius:100,
    },  
  ebc4: {
    backgroundColor: '#F7F761',
    borderRadius:100,
  },
  ebc6: {
    backgroundColor: '#F6F442',
    borderRadius:100,
  },
  ebc8: {
    backgroundColor: '#E9E53C',
    borderRadius:100,
  },
  ebc12: {
    backgroundColor: '#CDBB3B',
    borderRadius:100,
  },
  ebc16: {
    backgroundColor: '#B48F46',
    borderRadius:100,
  },
  ebc20: {
    backgroundColor: '#B08042',
    borderRadius:100,
  },
  ebc26: {
    backgroundColor: '#A76739',
    borderRadius:100,
  },
  ebc33: {
    backgroundColor: '#7D4C3A',
    borderRadius:100,
  },
  ebc39: {
    backgroundColor: '#54361E',
    borderRadius:100,
  },
  ebc47: {
    backgroundColor: '#271D1C',
    borderRadius:100,
  },
  ebc57: {
    backgroundColor: '#171312',
    borderRadius:100,
  },
  ebc69: {
    backgroundColor: '#101010',
    borderRadius:100,
  },
  ebc79: {
    backgroundColor: '#0C0C0C',
    borderRadius:100,
  },
  ebc138: {
    backgroundColor: '#000000',
    borderRadius:100,
  },
});