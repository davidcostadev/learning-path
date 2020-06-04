import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const someListHere = [
  { name: 'Jhonny #1', age: 27 },
  { name: 'Gustavo #2', age: 28 },
  { name: 'DVD #3', age: 27 },
  { name: 'Fabiano #4', age: 33 },
];

const ListScreen = () => {
  return (
    <View>
      <FlatList
        data={someListHere}
        keyExtractor={(friend) => friend.name}
        renderItem={({ item }) => {
          // element === { item: { name }, index: 0 }

          return (
            <Text style={styles.friendItem}>
              {item.name} - age: {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  friendItem: {
    fontSize: 16,
    color: 'red',
    marginRight: 16,
    marginLeft: 16,
    marginTop: 8,
    marginBottom: 8,
  },
});

export default ListScreen;
