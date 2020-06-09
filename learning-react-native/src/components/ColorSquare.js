import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const ColorSquare = ({ color, value, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>
        {color}({value})
      </Text>
      <View>
        <Button title={`Increase ${color}`} onPress={onIncrease} />
        <Button title={`Decrease ${color}`} onPress={onDecrease} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorSquare;
