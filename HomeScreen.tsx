import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, MenuItem } from '../types';
import { useNavigation } from '@react-navigation/native';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  
  const menuItems: MenuItem[] = [
    { id: '1', dishName: 'Samosas', description: 'Crispy fried snacks', cost: 80, course: 'Starter' },
    { id: '2', dishName: 'Chicken Pops', description: 'Fried chicken on skewers', cost: 90, course: 'Starter' },
    { id: '3', dishName: 'Wings', description: 'Spicy chicken wings', cost: 100, course: 'Starter' },
    { id: '4', dishName: 'Prawns', description: 'Juicy prawns grilled to perfection and served with a zesty lemon butter sauce', cost: 120, course: 'Main' },
    { id: '5', dishName: 'Steak', description: 'Juicy grilled steak', cost: 150, course: 'Main' },
    { id: '6', dishName: 'Pasta', description: 'Creamy pasta with mushrooms', cost: 130, course: 'Main' },
    { id: '7', dishName: 'Mango', description: 'Fresh mango dessert', cost: 60, course: 'Dessert' },
    { id: '8', dishName: 'Chocolate', description: 'Rich chocolate dessert', cost: 80, course: 'Dessert' },
    { id: '9', dishName: 'Oreo', description: 'Oreo-based dessert', cost: 70, course: 'Dessert' },
  ];

  const calculateAverageCost = (course: string): number => {
    const items = menuItems.filter(item => item.course === course);
    const totalCost = items.reduce((sum, item) => sum + item.cost, 0);
    return items.length ? totalCost / items.length : 0;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Average Prices by Course</Text>
      {['Starter', 'Main', 'Dessert'].map(course => (
        <Text key={course} style={styles.courseText}>
          {course}: R{calculateAverageCost(course).toFixed(2)}
        </Text>
      ))}

      {/* TouchableOpacity buttons for better styling control */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MenuManagement')}
      >
        <Text style={styles.buttonText}>Go to Menu Management</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Filter')}
      >
        <Text style={styles.buttonText}>Go to Filter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20,
    backgroundColor: 'gold', 
  },
  title: { fontSize: 30, fontWeight: 'bold', marginBottom: 20 },
  courseText: { fontSize: 18, marginBottom: 10 },

  
  button: {
    backgroundColor: 'black', 
    paddingVertical: 12,         
    paddingHorizontal: 20,       
    borderRadius: 5,           
    marginBottom: 15,           
    width: '80%',               
    alignItems: 'center',       
  },
  buttonText: {
    color: 'white',             
    fontSize: 16,               
    fontWeight: 'bold',        
  },
});

export default HomeScreen;
