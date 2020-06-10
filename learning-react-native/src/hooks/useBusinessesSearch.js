import { useState, useEffect } from 'react';
import yelp from '../services/yelp';

export const useBusinessesSearch = (initial) => {
  const [isLoading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [errorMessage, setError] = useState('');

  const search = async (searchTerm) => {
    setLoading(true);
    setError('');
    setResults([]);
    try {
      const { data } = await yelp.get('/businesses/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose',
        },
      });
      setResults(data.businesses);
    } catch (error) {
      console.error(error.message);
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    search(initial);
  }, [initial]);

  return {
    loading: isLoading,
    error: errorMessage,
    data: results,
    search,
  };
};
