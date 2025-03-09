import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useCallback, useRef, useState, useEffect } from 'react';
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
import NoBeers from '../components/NoBeers';

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
  const [abvLow, setAbvLow] = useState(0);
  const [abvHigh, setAbvHigh] = useState(20);
  const [IBULow, setIBULow] = useState(0);
  const [IBUHigh, setIBUHigh] = useState(100);

  // Set navigation options
  useEffect(() => {
    navigation.setOptions({
      title: "Explore",
      headerShadowVisible: true,
      headerTitleAlign: "center",
      headerTintColor: Colors.white,
      headerStyle: {
        backgroundColor: Colors.primaryGreen,
      },
    });
  }, [navigation]);

  // Fetch initial beers data
  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get(`http://10.0.2.2:3333/v2/beers?per_page=30&page=1&abv_gt=${abvLow}&abv_lt=${abvHigh}&ibu_gt=${IBULow}&ibu_lt=${IBUHigh}`);
        setBeers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBeers();
  }, [abvLow, abvHigh, IBULow, IBUHigh]);

  // Fetch more beers data
  const fetchMoreBeers = async () => {
    try {
      const response = await axios.get(`http://10.0.2.2:3333/v2/beers?per_page=30&abv_gt=${abvLow}&abv_lt=${abvHigh}&ibu_gt=${IBULow}&ibu_lt=${IBUHigh}&page=` + (page + 1));
      setPage(page + 1);
      setBeers([...beers, ...response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAbvSearch = (low, high) => {
    setAbvLow(low);
    setAbvHigh(high);
  };

  const handleIBUSearch = (low, high) => {
    setIBULow(low);
    setIBUHigh(high);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetModalProvider>
      {beers.length === 0 ? 

        <NoBeers />

        :

        <ScrollView style={styles.beerList}>         
          <BeerList beers={beers} type="random" />
          <View style={styles.buttonContainer}>
            <Button style={styles.loadMoreButton} onPress={fetchMoreBeers}>Load more</Button>
          </View>
        </ScrollView>
        }
        <FAB onPress={handlePresentModalPress}>Open Sheet</FAB>

        <BottomSheetModal
          ref={bottomSheetModalRef}
          onChange={handleSheetChanges}
          snapPoints={['50%']}
          detached={true}
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
            <Filters
              onAbvChange={handleAbvSearch}
              onIBUChange={handleIBUSearch}
              abvLow={abvLow}
              abvHigh={abvHigh}
              IBULow={IBULow}
              IBUHigh={IBUHigh}
              setAbvLow={setAbvLow}
              setAbvHigh={setAbvHigh}
              setIBULow={setIBULow}
              setIBUHigh={setIBUHigh}
            />
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  beerList: {
    paddingBottom: 40,
    paddingHorizontal: 16,
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

