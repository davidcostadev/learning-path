import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Esse é apenas um titulo</Text>
      <Text style={styles.subtitle}>Subtitulo aqui oh.</Text>
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
});

export default HomeScreen;
