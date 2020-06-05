import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.subtitle}>Subtitulo aqui, oh!.</Text>
      <View style={styles.menu}>
        <Button title="Another" onPress={() => navigation.navigate('Another')} />
      </View>
      <View style={styles.menu}>
        <Button title="List" onPress={() => navigation.navigate('List')} />
      </View>
      <View style={styles.menu}>
        <Button title="Image" onPress={() => navigation.navigate('Image')} />
      </View>
      <View style={styles.menu}>
        <Button title="Count" onPress={() => navigation.navigate('Count')} />
      </View>
      <View style={styles.menu}>
        <Button title="Colors" onPress={() => navigation.navigate('Colors')} />
      </View>
      <View style={styles.menu}>
        <Button title="Square" onPress={() => navigation.navigate('Square')} />
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
  subtitle: {
    fontSize: 18,
    marginLeft: 10,
  },
  menu: {
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 16,
    marginRight: 16,
  },
});

export default HomeScreen;
