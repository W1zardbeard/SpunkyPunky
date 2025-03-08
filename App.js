import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import Colors from './constants/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Imports for screens
import Home from './screens/Home';
import Favorites from './screens/Favorites';
import Search from './screens/Search';
import BeerDetails from './screens/BeerDetails';
import Explore from './screens/Explore';

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
          height: 70,
        },
        tabBarLabelStyle: {
          fontFamily: 'Inter-Medium',
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <MaterialCommunityIcons name={"home-variant"} color={color} size={24} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          title: "Explore",
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <MaterialCommunityIcons name={"beer"} color={color} size={24} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <MaterialCommunityIcons name={"heart"} color={color} size={24} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const screenOptions = {
  contentStyle: {
    backgroundColor: 'blue',
  },
};

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('./node_modules/@expo-google-fonts/inter/Inter_700Bold.ttf'),
    'Inter-Regular': require('./node_modules/@expo-google-fonts/inter/Inter_400Regular.ttf'),
    'Inter-Medium': require('./node_modules/@expo-google-fonts/inter/Inter_500Medium.ttf'),
    'Inter-SemiBold': require('./node_modules/@expo-google-fonts/inter/Inter_600SemiBold.ttf'),
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
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
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="BeerDetails" component={BeerDetails} />
            <Stack.Screen name="Search" component={Search} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
