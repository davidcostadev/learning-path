import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';
import ColorSquare from '../components/ColorSquare';

const COLOR_STEP = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  const setColor = (color, value, step) => {
    if (value + step >= 0 && value + step <= 255) {
      if (color === 'red') {
        setRed(value + step);
      } else if (color === 'blue') {
        setBlue(value + step);
      } else {
        setGreen(value + step);
      }
    }
  };

  return (
    <View>
      <Text style={styles.title}>Square Screen</Text>
      <View style={styles.menu}>
        <ColorSquare
          color="Red"
          value={red}
          onIncrease={() => setColor('red', red, COLOR_STEP)}
          onDecrease={() => setColor('red', red, -1 * COLOR_STEP)}
        />
      </View>
      <View style={styles.menu}>
        <ColorSquare
          color="Blue"
          value={blue}
          onIncrease={() => setColor('blue', blue, COLOR_STEP)}
          onDecrease={() => setColor('blue', blue, -1 * COLOR_STEP)}
        />
      </View>
      <View style={styles.menu}>
        <ColorSquare
          color="Green"
          value={green}
          onIncrease={() => setColor('green', green, COLOR_STEP)}
          onDecrease={() => setColor('green', green, -1 * COLOR_STEP)}
        />
      </View>
      <View style={styles.menu}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: `rgb(${red}, ${blue}, ${green})`,
          }}
        />
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

export default SquareScreen;
