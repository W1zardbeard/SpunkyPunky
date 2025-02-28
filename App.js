import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';

import AppLoading from 'expo-app-loading';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import Colors from './constants/colors';

import { MaterialCommunityIcons } from '@expo/vector-icons';

//imports for screens
import Home from './screens/Home';
import Favorites from './screens/Favorites';
import Search from './screens/Search';
import FavoritesTest from './screens/FavoritesTest';
import BeerDetails from './screens/BeerDetails';

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.primaryGreen,
        tabBarInactiveTintColor: Colors.grey,
        tabBarStyle: {
          backgroundColor: Colors.white,
          borderTopWidth: 0,
          elevation: 8,
        },
        tabBarLabelStyle: {
          fontFamily: 'Inter-Medium',
          fontSize: 10,
        },

      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <MaterialCommunityIcons name={"home-variant"} color={color} size={24} />
            );
          },
        }}
      />
      <Tab.Screen name="Search" component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <MaterialCommunityIcons name={"magnify"} color={color} size={24} />
            );
          },
        }}
      />
      <Tab.Screen name="Favorites" component={Favorites}

        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <MaterialCommunityIcons name={"heart"} color={color} size={24} />
            );
          },
        }} />

    </Tab.Navigator>

  )
}

const screenOptions = {
  contentStyle: {
    backgroundColor: 'blue'
  },

}

export default function App() {

  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('./node_modules/@expo-google-fonts/inter/Inter_700Bold.ttf'),
    'Inter-Regular': require('./node_modules/@expo-google-fonts/inter/Inter_400Regular.ttf'),
    'Inter-Medium': require('./node_modules/@expo-google-fonts/inter/Inter_500Medium.ttf'),
    'Inter-SemiBold': require('./node_modules/@expo-google-fonts/inter/Inter_600SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (


    <><SafeAreaProvider>
      <StatusBar
        style="light"
        backgroundColor={Colors.primaryGreen}
      />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: "center",
            headerTintColor: Colors.white,
          }}
        >
          <Stack.Screen
            name="Tabs"
            component={MyTabs}
            options={
              {
                headerShown: false
              }
            }
          />

          <Stack.Screen name="FavoritesTest" component={FavoritesTest} />
          <Stack.Screen name="BeerDetails" component={BeerDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#fff',

  },

});
