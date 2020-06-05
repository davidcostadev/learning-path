import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.title}>Esse é apenas um titulo</Text>
      <Text style={styles.subtitle}>Subtitulo aqui, oh!.</Text>
      <View>
        <Button title="Another" onPress={() => navigation.navigate('Another')} />
      </View>
      <View>
        <Button title="Go to list" onPress={() => navigation.navigate('List')} />
      </View>
      <View>
        <Button title="Go to Image" onPress={() => navigation.navigate('Image')} />
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
});

export default HomeScreen;
