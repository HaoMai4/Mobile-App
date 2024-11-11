import { Text, SafeAreaView, StyleSheet } from 'react-native';

import PowerBikeShopScreen from './components/man1';
import BikeShopScreen from './components/man2';
import BikeShopDetailScreen from './components/man3';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
        <NavigationContainer>
      <Stack.Navigator initialRouteName="PowerBikeShop">
        <Stack.Screen
          name="PowerBikeShop"
          component={PowerBikeShopScreen}
          options={{ title: 'Welcome to Power Bike Shop' }}
        />
        <Stack.Screen
          name="BikeShop"
          component={BikeShopScreen}
          options={{ title: 'Bike Shop' }}
        />
        <Stack.Screen
          name="Detail"
          component={BikeShopDetailScreen}  // Màn hình thứ ba, bạn có thể tạo màn hình này
          options={{ title: 'Detail' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

