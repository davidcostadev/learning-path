import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ImageDetails = ({ title, image, score }) => {
  return (
    <View>
      <Image source={image} />
      <Text>{title}</Text>
      <Text>score: {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetails;
