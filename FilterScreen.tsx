import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuItem } from '../types';

const FilterScreen: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
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

  const filterByCourse = (course: string | null) => {
    setSelectedCourse(course);
  };

  const filteredItems = selectedCourse
    ? menuItems.filter(item => item.course === selectedCourse)
    : menuItems;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter by Course</Text>

      {/* Buttons for filtering */}
      <View style={styles.buttonsContainer}>
        {['Starter', 'Main', 'Dessert'].map(course => (
          <TouchableOpacity
            key={course}
            style={styles.filterButton}
            onPress={() => filterByCourse(course)}
          >
            <Text style={styles.filterButtonText}>{course}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => filterByCourse(null)}
        >
          <Text style={styles.filterButtonText}>Show All</Text>
        </TouchableOpacity>
      </View>

      {/* List of filtered items */}
      <FlatList
        data={filteredItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.dishName} - R{item.cost}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'gold', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: 'orange',
    marginBottom: 10,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
    color: 'black',
  },
});

export default FilterScreen;
