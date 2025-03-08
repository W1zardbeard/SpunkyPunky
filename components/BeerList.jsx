import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

import BeerListItem from '../components/BeerListItem';
import EmptyState from '../components/EmptyState';

import Colors from '../constants/colors';
import GlobalLayout from '../constants/globalLayout';
import Typography from '../constants/typography';

export default function BeerList({beers, title, type, resultSize}) {  

  if (type === "favorites" && beers.length === 0) {
    return (
        <View style={styles.flatListContainer}>
          <Text style={Typography.h1}>{title}</Text>
              <EmptyState />
        </View>
    )
  }


  return (
    <View style={styles.flatListContainer}>
      <View style={styles.header}>
        {title ? <Text style={Typography.h1}>{title}</Text> : null}
   
        {resultSize ? (
          <Text style={Typography.p1}>{resultSize} results</Text>
        ) : null}
      </View>
            <FlatList
                data={beers}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <BeerListItem beer={item} />}
                numColumns={2}
                contentContainerStyle={styles.contentContainerStyle}
                columnWrapperStyle={styles.columnWrapperStyle}
                scrollEnabled={false}
           
            />
    </View>
  )
}

const styles = StyleSheet.create({
    contentContainerStyle: {
        gap: 8,
      },
      columnWrapperStyle: {
        gap: 8,
      },
      flatListContainer: {
        flexGrow: 1,
        marginBottom: 16,
        paddingHorizontal: 16,
        overflow: "visible",
        marginVertical: 16,
        gap:8
      },
      header:{
        gap:0
      }
})