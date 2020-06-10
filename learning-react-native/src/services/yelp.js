import axios from 'axios';
import { YELP_TOKEN } from '../../config';

const baseURL = 'https://api.yelp.com/v3/';
console.log(YELP_TOKEN);
export default axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${YELP_TOKEN}`,
  },
});
