import fetchAccount from './dbutils';

let accountId = null;
let account = null;

export function setAccount(newAccountId) {
  accountId = newAccountId;

  fetchAccount(newAccountId)
    .then( acc => account = acc)
    .catch( error => console.log(error) )
}

export function getAccessToken() {
  return 'token';
  return account.access_token;
}
