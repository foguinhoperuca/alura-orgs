import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import BestFarmers from '../screens/BestFarmers';
import Basket from '../screens/Basket';
import mock_basket from '../mocks/basket';

const Tab = createBottomTabNavigator();
const Bsk = () => <Basket {...mock_basket} />;

export default function AppRotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Best Farmers" component={BestFarmers} />
        <Tab.Screen name="Basket" component={Bsk} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
