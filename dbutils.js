
const fetchAccount = (accountId) => {
  return new Promise(
    (resolve, reject) => {
      resolve({access_token: 'fake'})
    }
  );
}

export default fetchAccount;
