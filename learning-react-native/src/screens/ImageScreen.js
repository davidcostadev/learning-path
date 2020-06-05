import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import ImageDetails from '../components/ImageDetails';

const someListHere = [
  { title: 'Forest', image: require('../../assets/images/forest.jpg'), score: 10 },
  { title: 'Beach', image: require('../../assets/images/beach.jpg'), score: 3 },
  { title: 'Mountain', image: require('../../assets/images/mountain.jpg'), score: 6 },
];

const ImageScreen = () => {
  return (
    <View>
      <FlatList
        data={someListHere}
        keyExtractor={(image) => image.title}
        renderItem={({ item }) => (
          <ImageDetails title={item.title} image={item.image} score={item.score} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
