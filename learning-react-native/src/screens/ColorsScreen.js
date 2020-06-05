import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';

const ColorsScreen = ({ navigation }) => {
  const [colors, setColors] = useState([]);

  const onAddColors = () => {
    setColors([...colors, randomRGB()]);
  };

  return (
    <View>
      <Text style={styles.title}>Colors Screen</Text>
      <View style={styles.menu}>
        <Button title="Add color" onPress={onAddColors} />
      </View>
      <FlatList
        data={colors}
        keyExtractor={(color) => color}
        renderItem={({ item }) => (
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: item,
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: 'red',
    marginLeft: 10,
  },
  count: {
    textAlign: 'center',
    fontSize: 21,
    color: 'green',
  },
  menu: {
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 16,
    marginRight: 16,
  },
});

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${blue}, ${green})`;
};

export default ColorsScreen;
