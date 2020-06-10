import React from 'react';
import { View, TextInput, StyleSheet, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ query, onSearchChange, loading, onSubmit }) => {
  return (
    <View style={styles.box}>
      {loading ? (
        <ActivityIndicator size="large" style={styles.loadingIcon} />
      ) : (
        <Feather style={styles.searchIcon} value={query} name="search" size={30} color="black" />
      )}
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={onSearchChange}
        onEndEditing={onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 4,
    marginHorizontal: 15,
    marginVertical: 10,
    flexDirection: 'row',
  },
  searchIcon: {
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  loadingIcon: {
    marginHorizontal: 7,
  },
  input: {
    height: 50,
    flex: 1,
    fontSize: 18,
  },
});

export default SearchBar;
