import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ResultList = ({ title, data }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
});

export default ResultList;
