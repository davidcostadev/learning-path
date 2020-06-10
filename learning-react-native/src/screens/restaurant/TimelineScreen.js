import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../../components/SearchBar';
import ResultList from '../../components/ResultList';
import { useBusinessesSearch } from '../../hooks/useBusinessesSearch';

const TimelineScreen = () => {
  const [query, setQuery] = useState('');
  const { loading, error, data, search } = useBusinessesSearch('pasta');

  const onSearchChange = (text) => {
    setQuery(text);
  };

  const businessesSearch = () => {
    console.log('submit');
    search(query);
  };
  console.log(data);
  console.log(error);

  const filterResultsByPrice = (price) => {
    return data.filter((result) => result.price === price);
  };

  return (
    <View style={styles.screen}>
      <SearchBar
        query={query}
        loading={loading}
        onSearchChange={onSearchChange}
        onSubmit={() => businessesSearch()}
      />
      {!!error && <Text style={styles.error}>{error}</Text>}
      <Text>We found {data.length} results</Text>
      <Text>{query}</Text>
      <ResultList title="Cost Effective" data={filterResultsByPrice('$')} />
      <ResultList title="Bit Pricier" data={filterResultsByPrice('$$')} />
      <ResultList title="Big Spender" data={filterResultsByPrice('$$$')} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#FFFFFF',
  },
  error: {
    backgroundColor: '#ba000d',
    color: 'white',
    fontSize: 16,
    padding: 8,
  },
});

export default TimelineScreen;
