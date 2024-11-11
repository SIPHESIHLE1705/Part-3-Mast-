// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import MenuManagementScreen from './MenuManagementScreen';
import FilterScreen from './FilterScreen';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home', headerStyle: { backgroundColor: '#FFDAB9' }, headerTintColor: '#000' }}
        />
        <Stack.Screen 
          name="MenuManagement" 
          component={MenuManagementScreen} 
          options={{ title: 'Manage Menu', headerStyle: { backgroundColor: '#FFDAB9' }, headerTintColor: '#000' }}
        />
        <Stack.Screen 
          name="Filter" 
          component={FilterScreen} 
          options={{ title: 'Filter Menu', headerStyle: { backgroundColor: '#FFDAB9' }, headerTintColor: '#000' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
