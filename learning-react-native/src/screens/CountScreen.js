import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

const CountScreen = ({ navigation }) => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text style={styles.title}>Count Screen</Text>
      <View style={styles.menu}>
        <Button title="Increase" onPress={() => setCount(count + 1)} />
      </View>
      <View style={styles.menu}>
        <Button title="Decrease" onPress={() => setCount(count - 1)} />
      </View>
      <Text style={styles.count}>Count: {count}</Text>
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

export default CountScreen;
