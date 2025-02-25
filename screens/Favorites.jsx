import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Favorites({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('FavoritesTest')}>Favorites</Text>
    </View>
  )
}

const styles = StyleSheet.create({})