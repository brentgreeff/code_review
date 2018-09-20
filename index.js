
import whenCurrencyRates from './fetch/currencyRates';
import whenInsightMetrics from './fetch/insightMetrics';
import whenReachMetrics from './fetch/reachMetrics';
import whenConversionMetrics from './fetch/conversionMetrics';

import { setAccount } from './account'

const account_id = 1;
setAccount(account_id)

whenCurrencyRates({})
  // .then( response => response.json )
  .then( json => console.log(json) )
  .catch( error => console.log(error) );

whenInsightMetrics({ id: account_id, metrics: ['views', 'spend'] })
  .then( metrics => console.log(metrics) )
  .catch( error => console.log(error) );

whenReachMetrics({
  id: account_id, metrics: ['audienceOverlap', 'uniqueReach']
}).then( metrics => console.log(metrics) )
  .catch( error => console.log(error) );

whenConversionMetrics({
  id: account_id, metrics: ['purchases', 'revenue']
}).then( metrics => console.log(metrics) )
  .catch( error => console.log(error) );
