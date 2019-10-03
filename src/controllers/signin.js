export const signin = (data) => {
  return fetch('https://nlp-suite.herokuapp.com/user/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .then((resData) => {
      return resData;
    })
    .catch((err) => {
      console.log(err);
    });
};
