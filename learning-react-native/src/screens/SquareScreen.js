import React, { useReducer } from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';
import ColorSquare from '../components/ColorSquare';

const COLOR_STEP = 15;

const reducer = (state, { type, payload }) => {
  if (state[type] + payload < 0 || state[type] + payload > 255) return state;
  switch (type) {
    case 'red':
      return {
        ...state,
        [type]: state[type] + payload,
      };
    case 'blue':
      return {
        ...state,
        [type]: state[type] + payload,
      };
    case 'green':
      return {
        ...state,
        [type]: state[type] + payload,
      };
    default:
      state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, {
    red: 0,
    blue: 0,
    green: 0,
  });

  return (
    <View>
      <Text style={styles.title}>Square Screen</Text>
      <View style={styles.menu}>
        <ColorSquare
          color="Red"
          value={state.red}
          onIncrease={() => dispatch({ type: 'red', payload: COLOR_STEP })}
          onDecrease={() => dispatch({ type: 'red', payload: -1 * COLOR_STEP })}
        />
      </View>
      <View style={styles.menu}>
        <ColorSquare
          color="Blue"
          value={state.blue}
          onIncrease={() => dispatch({ type: 'blue', payload: COLOR_STEP })}
          onDecrease={() => dispatch({ type: 'blue', payload: -1 * COLOR_STEP })}
        />
      </View>
      <View style={styles.menu}>
        <ColorSquare
          color="Green"
          value={state.green}
          onIncrease={() => dispatch({ type: 'green', payload: COLOR_STEP })}
          onDecrease={() => dispatch({ type: 'green', payload: -1 * COLOR_STEP })}
        />
      </View>
      <View style={styles.menu}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
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
