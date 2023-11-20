import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from './HomePage';
import LearnPage from './LearnPage';
import TranslatePage from './TranslatePage';


const homeName = "Home";
const learnName = "Learn";
const translateName = "Translate";

const Tab = createBottomTabNavigator();

function NavContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={homeName} component={HomePage} />
        <Tab.Screen name={learnName} component={LearnPage} />
        <Tab.Screen name={translateName} component={TranslatePage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default NavContainer;