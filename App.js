import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';

import AppLoading from 'expo-app-loading';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import Colors from './constants/colors';



//imports for screens
import Home from './screens/Home';
import Favorites from './screens/Favorites';
import Search from './screens/Search';
import FavoritesTest from './screens/FavoritesTest';

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}
        options={{
          headerShown: false
        }}
      />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Search" component={Search} />
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
        style="dark"
        backgroundColor={Colors.primaryGreen}
      />

      <NavigationContainer>
        <Stack.Navigator>
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
