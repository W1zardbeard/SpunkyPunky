import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useCallback, useRef, useState, useEffect,useMemo } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import axios from 'axios';
import BeerList from '../components/BeerList';
import Colors from '../constants/colors';
import Button from '../components/ui/Button';
import FAB from '../components/ui/FAB';
import Filters from '../components/Filters';





export default function Explore({ navigation }) {
  // ref
  const bottomSheetModalRef = useRef(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);


  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);
  const bottomSheetRef = useRef(null);


    // Set navigation options
  navigation.setOptions({
    title: "Explore",
    headerShadowVisible: true,
    headerTitleAlign: "center",
    headerTintColor: Colors.white,
    headerStyle: {
      backgroundColor: Colors.primaryGreen,
    },
  });

  // Fetch initial beers data
  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get("http://10.0.2.2:3333/v2/beers?per_page=30&page=1");
        setBeers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBeers();
  }, []);

  // Fetch more beers data
  const fetchMoreBeers = async () => {
    try {
      const response = await axios.get("http://10.0.2.2:3333/v2/beers?per_page=30&page=" + (page + 1));
      setPage(page + 1);
      setBeers([...beers, ...response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  // renders
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetModalProvider>
        <ScrollView style={styles.beerList}>
          <BeerList beers={beers} type="random" />
          <View style={styles.buttonContainer}>
            <Button style={styles.loadMoreButton} onPress={fetchMoreBeers}>Load more</Button>
          </View>
        </ScrollView>


        <FAB onPress={handlePresentModalPress}>Open Sheet</FAB>


        <BottomSheetModal
          ref={bottomSheetModalRef}
          onChange={handleSheetChanges}
          snapPoints={['50%']}
          detatched={true}
          enableDynamicSizing={false}
          enableContentPanningGesture={false}
          backdropComponent={({ animatedIndex, style }) => (
          
          <View
            style={[
              style,
              {
                backgroundColor: 'rgba(0,0,0,0.5)',
              },
            ]}
          />
        )}

        >
          <BottomSheetView style={styles.contentContainer}>
          
           <Filters />




          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};


  const styles = StyleSheet.create({
  beerList: {
    paddingBottom: 40,
  },
  buttonContainer: {
    alignItems: "center",
    marginBottom: 40,
    marginTop: 20,
  },
  loadMoreButton: {
    width: 200,
    backgroundColor: Colors.grey,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
});

