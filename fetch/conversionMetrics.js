import fetch from 'isomorphic-fetch';
import { getAccessToken } from '../account';

const BASE_URL = 'https://api.example.com/v1/'

const conversionMetrics = (options) => {
  const {id, metrics, timeframe='last_7_days'} = options;

  return new Promise(
    (resolve, reject) => {
      setTimeout(
        () => resolve([
          options,
          {conversion: 'Metrics'}
        ])
      , 500)
    }
  );

  return fetch(BASE_URL + id + '/conversions', {
    headers: {
      'Authorization': getAccessToken(),
      'Content-Type': 'application/json',
      'X-API-version': '2.3'
    },
    json: options
  });
};

export default conversionMetrics;
