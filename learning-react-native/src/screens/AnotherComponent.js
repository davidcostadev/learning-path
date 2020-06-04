import React from "react";
import { Text, StyleSheet } from "react-native";

const AnotherComponent = () => {
  return <Text style={styles.text}>Mini</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    color: 'blue',
    marginLeft: 10,
  }
});

export default AnotherComponent;
