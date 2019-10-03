export const getProjects = () => {
  return fetch(`https://nlp-suite.herokuapp.com/user/project`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('jwt'),
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
      return {};
    });
};

export const addProject = (data) => {
  return fetch(`https://nlp-suite.herokuapp.com/user/project`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('jwt'),
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
      return {};
    });
};

export const deleteProject = (data) => {
  return fetch(`https://nlp-suite.herokuapp.com/user/project`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('jwt'),
    },
    body: JSON.stringify(data),
  })
    .then((result) => result.json())
    .catch((err) => {
      console.log(err);
      return {};
    });
};
