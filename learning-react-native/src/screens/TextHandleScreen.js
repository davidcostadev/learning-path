import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const TextHandleScreen = () => {
  const [value, setValue] = useState('');

  return (
    <View>
      <Text style={styles.title}>TextHandle Screen</Text>
      <View style={styles.menu}>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          value={value}
          onChangeText={(text) => setValue(text)}
        />
      </View>
      <View style={styles.menu}>
        <Text>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: 'red',
    marginLeft: 10,
  },
  input: {
    fontSize: 21,
    padding: 8,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 4,
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

export default TextHandleScreen;
