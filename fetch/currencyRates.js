import fetch from 'isomorphic-fetch';

const CURRENCY_API_AUTH_TOKEN = '6a9a96cf53cf0f3aadfa2c65c37026e6';

const currencyRates = () => {
  return new Promise(
    (resolve, reject) => {
      setTimeout(
        () => resolve({usd: 1.5})
      , 500)
    }
  );

  return fetch('https://api.currencyrates.com/rates?base_currency=eur', {
    headers: {
      'Authorization': 'Bearer ' + CURRENCY_API_AUTH_TOKEN
    }
  })
};

export default currencyRates;
