import fetch from 'isomorphic-fetch';
import { getAccessToken } from '../account';

const BASE_URL = 'https://api.example.com/v1/'

const reachMetrics = (options) => {
  const {id, metrics, timeframe='last_7_days'} = options;

  return new Promise(
    (resolve, reject) => {
      setTimeout(
        () => resolve([
          options,
          {
            'audienceOverlap': 'Reach audienceOverlap',
            'uniqueReach': 'Reach uniqueReach'
          }
        ])
      , 500)
    }
  );

  return fetch(BASE_URL + id + '/reach', {
    headers: {
      'Authorization': getAccessToken(),
      'Content-Type': 'application/json',
      'X-API-version': '2.3'
    },
    body: JSON.stringify(options)
  });
};

export default reachMetrics;
