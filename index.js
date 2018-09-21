
import whenCurrencyRates from './fetch/currencyRates';
import whenInsightMetrics from './fetch/insightMetrics';
import whenReachMetrics from './fetch/reachMetrics';
import whenConversionMetrics from './fetch/conversionMetrics';

import { setAccount } from './account'

const account_id = 1;
setAccount(account_id)

const upsertStats = (timeframe, stat) => {
  const date = new Date().toISOString();
  // console.log(stat);
}

const saveStats = (metrics) => {
  const rates = metrics.shift();

  const reMapped = metrics.map(
    (m) => m[0].metrics.map( metric => [metric, m[1][metric]] )
  )

  reMapped.map(
    (m) => {
      console.log(m)
    }
  )

  return null;

  reMapped.map((pair) => {
    const metric = pair[0];
    const stats = pair[1];

    if ('spend' === metric) {
      return stats.map(s => ({ [metric]: s * rates.usd }));
    }
    return stats.map(s => ({ [metric]: s}));
  }).forEach(stat => {
    if (stat == null) {
      return;
    }
    upsertStats('last_30_days', stat);
  })
}

Promise.all([
  whenCurrencyRates({}),
  whenInsightMetrics({ id: account_id, metrics: ['views', 'spend'] }),
  whenReachMetrics({
    id: account_id, metrics: ['audienceOverlap', 'uniqueReach']
  }),
  whenConversionMetrics({
    id: account_id, metrics: ['purchases', 'revenue']
  })
]).then( metrics => saveStats(metrics) )
  .catch( error => console.log(error) );
